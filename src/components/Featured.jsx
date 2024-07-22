import { styles } from "../styles"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useData } from '../context/DataContext';

const CoinCard = ({ name, current_price , image,price_change_percentage_24h})=>{
    return(
        <div className='p-3 bg-white w-48 h-40 sm:w-[30%] sm:h-[150px] lg:w-[220px] lg:h-44 rounded-xl shadow-xl cursor-pointer'>
            <img src={image} alt="cions" className='size-[42px] rounded-full' />
            <h2 className=' font-semibold mt-2 text'>
             {name}
            </h2>
            <p className='text-secondary text-[19px]'>{current_price.toLocaleString()} $</p>
            <div className={`flex items-center text-[22px] font-medium mt-1 sm:mt-0 lg:mt-2 lg:ml-1 ${price_change_percentage_24h > 0 ? 'text-green-600':'text-red-600'}`}> 
                <p className='mb-1'>{price_change_percentage_24h > 0 ? <ArrowUpwardIcon sx={{ fontSize: 26 }} className=''/>  : <ArrowDownwardIcon sx={{ fontSize: 26 }} className='' /> }</p>     
                <p >{Math.abs(parseFloat(price_change_percentage_24h).toFixed(2) )}%</p>
            </div>
            
        </div>
    )

}



// eslint-disable-next-line react/prop-types
const Featured = () => {
    const {data , loading , error } = useData(); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <section className='container mx-auto  py-6 ' >
        <div className='flex flex-col lg:flex-row justify-center items-start '>

            <div className={`${styles.paddingX}  w-[100%] `}>
                <h3 className={`${styles.sectionHeadText}  `}>
                Explore crypto like Bitcoin, <br className='hidden md:block' /> Ethereum, and Dogecoin
                </h3>
                <p className={`${styles.heroSubText} text-secondary  `}>
                Simply and securely buy, sell, and manage <br className='hidden md:block' /> hundreds of cryptocurrencies.
                </p>

                <button className='text-black bg-sky-500 p-4 mt-2 md:mt-6 rounded-tl-2xl rounded-br-2xl outline-none font-semibold'>See more assets</button>

            </div>
            {/* max-w-[790px] */}
            <div className=' mt-5 lg:mt-0  w-[100%] '>
                <div className=' flex flex-wrap justify-center lg:justify-start items-start gap-3 py-3'>
                    {
                        // eslint-disable-next-line react/prop-types
                        data.map((coin , index) =>(
                            <CoinCard key={coin.name + index} {...coin}/>
                        ))    
                    }

                </div>

                
            </div>






        </div>
        

    </section>
  )
}

export default Featured