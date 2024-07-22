import  { useEffect, useState } from 'react';
import axios from 'axios';
import { styles } from "../styles"


const NewsAndUpdates = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'cryptocurrency',
            apiKey: 'af13b0058da04c2ba46683e29a9f25c9',
            sortBy: 'publishedAt',
            pageSize: 6,
            language: "en",
          }
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className='container mx-auto'>
        <div className=" p-6 rounded-lg mb-4 ">
            <h2 className={` text-2xl mb-6 ${styles.sectionHeadText}`}>Latest News and Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {item.urlToImage && (
                    <img src={item.urlToImage} alt={item.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      <h3 className="text-black font-semibold text-xl mb-2">{item.title}</h3>
                    </a>
                    <p className="text-gray-500 mb-2">{item.description}</p>
                    <p className="text-gray-900 text-sm ">Published on: {new Date(item.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default NewsAndUpdates