import {hand_Phone , recurring , coins, qr_code} from '../assets/index'
import { useData } from "../context/DataContext";

const JournyCrypto = () => {
    const {data  } = useData(); 

    
  return (
<section className='container mx-auto mt-3 p-4 flex justify-center'>
    <div className="md:grid gap-4 lg:w-[70%] md:grid-cols-2 auto-rows-4 ">
        <div className=" rounded-2xl border-2 border-gray-100 shadow-md">
            <div className='flex justify-center md:items-end'>
                <div className=''>
                    <h3 className='font-semibold text-[26px] md:text-[18px] lg:text-[24px] border p-4'>
                        <span className='text-sky-500'>Buy crypto </span><br/>
                        Buy BTC, ETH, and other crypto easily via bank transfer.
                    </h3>
                </div>
                <img src={hand_Phone} alt="hand holding phone" className='pt-4  size-[200px] lg:size-[200px]  border'/>
            </div>
        </div>




        <div className="row-span-2  rounded-2xl border-2 border-gray-100 mt-5 md:mt-0 shadow-md">
            <div className='flex flex-col items-center'>
                <h3 className='font-semibold ttext-[26px] md:text-[18px] lg:text-[24px]  p-5'>
                    <span className='text-sky-500'>Recurring Buy </span><br className='hidden md:block' />
                    Grow your portfolio automatically with daily, weekly, or monthly trades.
                </h3>
                <img src={recurring} alt="recurring buy" className='w-[80%]'/>
            </div>
        </div>

        <div className="row-span-2  rounded-2xl border-2 border-gray-100 p-4 mt-5 md:mt-0 shadow-md">
            <div className='flex flex-col items-center'>
                <h3 className='font-semibold ttext-[26px] md:text-[18px]
                lg:text-[24px]  p-5'>
                    <span className='text-sky-500'>Price Alerts </span><br className='hidden
                    md:block' />
                    Be notified on BTC, ETH, XRP prices, and more.
                </h3>
            </div>
            {
                data.map((item , index) => (
                    <div className='flex flex-row justify-between items-center cursor-pointer transition delay-100 duration-300 ease-in-out hover:shadow-xl p-4 rounded-xl' key={item.id + index}>
                        <div className='flex justify-between items-center space-x-4 '>
                             <img src={item.image} alt={item.name} className='size-[30px] rounded-full'/>
                             <div className='flex flex-col '>
                                <p className='text-[12px]'>{item.name}</p>
                                <p className='text-gray-500'>{item.symbol.toUpperCase()}</p>
                             </div>
                        </div>


                        <div className='flex flex-col items-end justify-end'>
                            <p>${item.current_price.toLocaleString()}</p>
                            <p className={` ${item.price_change_percentage_24h > 0 ? 'text-green-500':'text-red-500' }  font-semibold text-[14px] `} >
                            {Math.abs(parseFloat(item.price_change_percentage_24h).toFixed(2))}%</p>
                        </div>

                       

                    </div>
                ))
            }
            

        </div>

        <div className="col-start-2 row-start-3 rounded-2xl border-2 border-gray-100 p-4 flex items-center mt-5 md:mt-0 shadow-md">
        <div className='flex justify-center items-center'>
                <div className=' '>
                    <h3 className='font-semibold text-[26px] md:text-[18px] lg:text-[24px]  p-4'>
                        <span className='text-sky-500'>Buy crypto </span><br/>
                        Buy BTC, ETH, and other crypto easily via bank transfer.
                    </h3>
                </div>
                <img src={coins} alt="hand holding phone" className='size-[120px] lg:size-[150px]  border'/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center rounded-2xl items-center col-span-2 row-start-4 p-4 border-2 border-gray-100 mt-5 md:mt-0 shadow-md">
           <div className='text-center md:text-left flex-1'>
                <p className='font-semibold  '>
                    <span className='text-[15px] md:text-[18px] lg:text-[24px] text-gray-400'> Join our <span className='text-sky-500'>100M+ users</span><br /></span>
                    <span className='text-[26px] md:text-[18px] lg:text-[24px]'>Get started today</span>
                </p>
            </div>
            <div className='hidden md:flex justify-center items-center space-x-5 md:text-right mt-4 md:mt-0'>
                <p className='font-semibold text-[26px] md:text-[18px] lg:text-[24px]'>
                    Scan to download <br /> the app
                </p>
                <img src={qr_code} alt="QR code" className='w-[20%] md:size-[100px]'/>
            </div>
        </div>
          
        </div>
    
</section>



 

  )
}

export default JournyCrypto