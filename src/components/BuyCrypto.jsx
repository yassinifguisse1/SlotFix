import { styles } from "../styles"
import {buy} from '../assets'

const BuyCrypto = () => {
  return (
    <section className='container mx-auto  py-6 mt-7'>
        
        <div className={` flex flex-col-reverse md:flex-row  justify-center items-center md:space-x-10`}>
            <div className={`${styles.paddingX} `} >
               <img src={buy} alt="app" className='w-[373px] mx-auto'/>
            </div>
            <div className={`${styles.paddingX} `}>
                <h3 className={`${styles.sectionHeadText} px`}>
                Buy, sell, and store <br className='hidden md:block' /> hundreds of cryptocurrencies
                </h3>
                <p className='text-secondary text-[19px] mt-4'>From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency. <br className='hidden md:block'/> Protect your 
                    crypto with best in class cold storage.
                </p>
                <button className='text-black bg-sky-500 p-4 mt-5 md:mt-6 rounded-tl-2xl rounded-br-2xl outline-none font-semibold'>Sign up now</button>
            </div>
            
        </div>
    
    </section>
  )
}

export default BuyCrypto