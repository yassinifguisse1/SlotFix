import { footerLinks , socialMedia} from '../constants';


const Footer = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row items-start justify-start md:space-x-24'>
           <p className=" font-black text-[20px]">SLOT<span className="font-bold text-sky-500 text-[24px]">FIX</span></p>
    
           <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className=" font-medium text-[16px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-normal text-[14px] hover:text-sky-500 hover:translate-x-3 transition-all delay-150 ease-in-out duration-300 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center'>

                 <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                   <p className='mb-4 text-sm text-gray-500 sm:mb-0'>
                     © 2024 Copyright
                   </p>
                 </div>
                 <div className="flex flex-row md:mt-0 mt-6">
                 {socialMedia.map((media) => {
                   const IconComponent = media.icon;  // Assign the icon component to a variable
                   return (
                     <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer" className="text-xl ">
                       <IconComponent className='text-[23px] ml-3'/>
                     </a>
                   );
                 })}
               </div>

        </div>

        
      </div>
      
    </section>
  )
}

export default Footer