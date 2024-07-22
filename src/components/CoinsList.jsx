import { styles } from "../styles"
import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { useData } from "../context/DataContext";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


// eslint-disable-next-line react/prop-types
const ListCoins = ({ name, current_price , image,price_change_percentage_24h , total_volume , chartData = [] })=>{
console.log(name)
  const chartRef = useRef(null);
  useEffect(() => {
    let myChart = null;
    if (chartData.length > 0 && chartRef.current) {
      const coinChartData = chartData.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

      const chartDataFormatted = {
        labels: chartData.map(data => data.date),
        datasets: [
          {
            label: "Price",
            data: coinChartData,
            fill: false,
            borderColor: price_change_percentage_24h > 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)',

            // backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.1,
            borderWidth: 3,
            pointRadius: 0,
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 2, // Line thickness
          }
        ]
      };

      const ctx = chartRef.current.getContext("2d");
      myChart = new Chart(ctx, {
        type: "line",
        data: chartDataFormatted,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false, // Hide x-axis
              ticks: {
                display: false // Hide x-axis ticks (labels)
              },
              grid: {
                display: false // Hide x-axis grid
              }
            },
            y: {
              display: false, // Hide y-axis
              ticks: {
                display: false // Hide y-axis ticks (labels)
              },
              grid: {
                display: false // Hide y-axis grid
              }
            }
          },
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: true, // Disable tooltip
              callbacks: {
                title: () => null,
                label: function (context) {
                  // Return custom label for tooltip
                  return `${name}: $${context.raw.y}`;
                }
              }
            }
          },
          elements: {
            point: {
              radius: 0 // Hides the points on the line
            }
          }
        }
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
    
  }, [chartData, name, price_change_percentage_24h]);
    return(

        <div className="bg-white shadow-md rounded-lg  mb-2">
            <div className="flex flex-row justify-around items-center py-[6px] ">
                <img src={image} alt="img" className="w-7 md:w-9 rounded-full " />
                <p className="text-center font-semibold text-[15px] md:text-[17px] ">{name}</p>
                <p className='text-secondary text-[15px] md:text-[17px] '>${current_price.toLocaleString()}</p>
                <p className={`hidden md:block   ${price_change_percentage_24h > 0 ? 'text-green-500':'text-red-500' } text-green-600 font-semibold text-[17px] `}>{Math.abs(parseFloat(price_change_percentage_24h).toFixed(2))}%</p>
                <p className="hidden md:block text-secondary  text-sm md:text-base ">${total_volume.toLocaleString()}</p>
                <canvas className="w-full max-w-[100px] md:max-w-[200px] "  ref={chartRef} />
                <button className="bg-black text-white px-2 md:px-4 py-1 md:py-2  rounded-full font-semibold">Trade</button>

            </div> 
            <hr />

        </div>
    )

}

// eslint-disable-next-line react/prop-types
const CoinsList = () => {
  const {data , loading , error } = useData(); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className='container mx-auto mt-10'>
        <div className={`${styles.padding}  flex flex-col`}>
            <div>
              <h3 className={`${styles.sectionHeadText} lg:text-[60px] text-center`} >Buy Bitcoin, Ethereum, and <br className='hidden md:block'/> 350+ cryptocurrencies</h3>
            </div>

            <div>   
                {
                    // eslint-disable-next-line react/prop-types
                    data.map((coin, index) => (
                        <ListCoins key={coin.name + index} {...coin}   />
                        
                    ))
                }

            </div>

        </div>
    </section>
  )
}

export default CoinsList


