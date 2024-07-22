import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import { navLinks } from '../constants';
import {styles} from "../styles";
import {useState} from 'react'


const Navbar = () => {
  const[active , setActive] = useState("")
  const [toggle, setToggle] = useState(false)


  return (
    <nav className={` ${styles.paddingX}  w-full flex items-center justify-center py-2 fixed top-0 z-20 `}>
        <div className=" bg-white flex justify-between items-center w-full md:max-w-[650px] pl-5 pr-2 py-2 rounded-full shadow-xl relative">
         <Link
         to ='/'
         onClick={()=>{
           setActive('')
           window.scrollTo(0,0);
         }}
         >
          <p className="font-black text-[20px]">SLOT<span className="font-bold text-sky-500 text-[24px]">FIX</span></p>
        </Link>

          <ul className='list-none hidden md:flex flex-row gap-4'>
            {
            navLinks.map((link)=>
              <li key={link.id} 
                className={`${active === link.title ? 'text-sky-500' : 'text-secondary'}  text-[16px] hover:text-sky-500 font-medium cursor-pointer`}
                onClick={()=>setActive(link.title)} >  
                 <a href={`#${link.id}`}> {link.title} </a>
              </li>
            )
            }
          </ul>
          <button className="bg-sky-500 p-3 font-semibold rounded-full text-[15px] absolute md:relative right-12 md:right-0">
            GET STARTED
          </button>

          <div className="md:hidden flex justify-end items-center ">    
                <span 
                 className='object-contain cursor-pointer '
                 onClick={()=>setToggle(!toggle)}>
                  {toggle ? <CloseIcon sx={{ fontSize: 35 }}/> : <MenuIcon sx={{ fontSize: 35 }}/>}
                </span>
               <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-16 right-32 mx-4 my-2 z-10 rounded-xl min-w-[150px] shadow-xl`}>
              
               <ul className='list-none flex justify-end items-start flex-col gap-4'>  
                    { navLinks.map((link) => (
                     <li key={link.id} 
                         className={`${active === link.title ? 'text-sky-500' : 'text-secondary'} hover:text-sky-500 text-[16px] font-medium cursor-pointer`}
                         onClick={()=>setActive(link.title)} 
                          >
                          <a href={`#${link.id}`}> {link.title} </a>
                     </li>
                    ))}
               </ul>

               </div>
          </div>
          
        </div>
       
    </nav>
  )
}

export default Navbar