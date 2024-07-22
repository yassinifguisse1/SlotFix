import { styles } from "../styles"
import { laptop } from "../assets"

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto container ">
      <div className="absolute top-28 md:top-60 left-3 flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-black"/>
          <div className="w-1 h-96 violet-gradient "/>
        </div>

        <div className=' absolute top-[120px] md:top-[240px] flex flex-col md:flex-row justify-center items-center space-x-7 px-5'>
        
                {/* Left Side */}
               <div className={`${styles.paddingX}  w-[100%] `}>
                   <p className= {`${styles.heroSubText}  text-secondary`}>Buy & Sell Crypto 24/7 <br className="hidden md:block"/> using your retirement account</p>
                   <h1 className= {`${styles.heroHeadText}  text-black`}>Invest in Cryptocurreny <br className="hidden md:block"/> with Your IRA</h1>
                   <p className= {`${styles.heroSubText}  text-secondary lg:pt-3`}>Buy, Sell, and store hundreds of cryptocurrencies</p>
                   <div className='flex flex-col md:flex-row'>
                       <input type='email' placeholder='Enter your email' className="w-full md:w-3/5 p-4 mt-6 flex-1 border-solid border-2 border-sky-500  outline-none  shadow-lg rounded-tr-2xl rounded-bl-2xl"/>
                       <button className="text-black bg-sky-500 p-4 mt-2 md:mt-6 md:ml-5 rounded-tl-2xl rounded-br-2xl outline-none font-semibold">Learn More</button>
                   </div>
               </div>
               
               
               {/* Right Side */}
               <div className='hidden md:block w-[100%] '>
                   <div className='max-w-[100%] md:max-w-[100%]  lg:max-w-[70%]  m-auto mt-4 md:mt-0 '>
                       <img src={laptop} alt='laptop'/>
                   </div>
               </div>
        </div>












































































      {/* <div className={` border-2 border-sky-500 absolute  top-[70px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start `}>
        <div className=" flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-black"/>
          <div className="w-1 h-96 violet-gradient "/>
        </div>

        <div className=" ml-2 mt-4 flex flex-col lg:flex-row justify-center items-center space-x-5 border-2 border-sky-500">
          <div className=" border-2 border-sky-500 ">
             <p className={`${styles.heroSubText}  text-secondary`}>
               Buy & Sell  Crypto 24/7 <br className="hidden md:block"/> using your retirement account
             </p>
             <h1 className={`${styles.heroHeadText} border-2 border-sky-500 text-black text-[43px] font-bold`}>
               Invest in Cryptocurreny <br className="hidden md:block"/> with Your IRA
             </h1>
             <p className={`${styles.heroSubText}  text-secondary`}>
               Buy and Sell interfaces <br className="hidden md:block"/> and web applications
             </p>
             <div className='flex flex-col md:flex-row'>
              <input type="text" placeholder="Enter your email" 
               className="w-full md:w-3/5 p-4 mt-6 flex-1 border-solid border-2 border-sky-500 outline-none  shadow-lg rounded-tr-2xl rounded-bl-2xl"
              />
              <button className="bg-sky-500 p-4 mt-2 md:mt-6 md:ml-5 rounded-tl-2xl rounded-br-2xl outline-none ">Get Started</button>
             </div>
          </div>

          <div className="border-2 border-sky-500">
            <img src={laptop} alt="laptop" className=" md:max-w-[80%] mt-4 lg:mt-0 "/>
          </div>
          

        </div>
      </div> */}
      
    </section>

  )
}

export default Hero