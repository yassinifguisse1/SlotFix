import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const APIURL = 'https://api.coingecko.com/api/v3';
const KEYAPI = 'CG-5LAbw2XAMfzL2i4LF1TUzH3t';

const fetchChartData = async (coinId) => {
  try {
    const response = await axios.get(
      `${APIURL}/coins/${coinId}/market_chart`,
      {
        params: {
          vs_currency: 'usd',
          days: '7',
        },
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': KEYAPI,
        },
      }
    );
    return response.data.prices;
  } catch (err) {
    console.error(`Error fetching chart data for ${coinId}:`, err);
    return [];
  }
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              per_page: 100,
              page: 1,
            },
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': KEYAPI,
            },
          }
        );

        const coinsData = response.data;
        const filteredCoins = coinsData.filter(coin => ['bitcoin', 'ethereum', 'binancecoin', 'solana', 'litecoin', 'cardano'].includes(coin.id));

        const coinsWithChartData = await Promise.all(filteredCoins.map(async (coin) => {
          const chartData = await fetchChartData(coin.id);
          return { ...coin, chartData };
        }));

        setData(coinsWithChartData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCoins();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
