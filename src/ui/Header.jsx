import { NavLink } from "react-router-dom"
import { FiAlignRight } from "react-icons/fi";
import MobileSlider from "./MobileSlider";
import {useDispatch, useSelector} from "react-redux"

function Header() {
    const {isOpen} = useSelector((fam)=>fam.IsOpen);
    const dispatch = useDispatch()
    console.log(isOpen)


    const list = `tracking-[2px] font-[100] list relative`;

    return (<>
        <div className={`md:flex hidden w-full md:justify-between mt-8 md:items-center text-white z-40` }>

     <svg xmlns="http://www.w3.org/2000/svg" className="ml-10" width="48" height="48"><g fill="none"
      fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
     <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 
     24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>

               
            <div className="h-[2px] md:w-[20%] lg:w-[35%] ml-auto bg-white"></div>

            <div className="px-12 h-[70px] items-center flex justify-center py-5 nav">
                <ul className="flex space-x-5 font-condensed text-base uppercase">
                    <li className={`${list}`}><NavLink to={"/"}><span className="text-[#FFF] font-[900]">00</span> Home</NavLink></li>
                    <li className={`${list}`}><NavLink to={"/destination"}><span className="text-[#fff] font-[900]">01</span> Destination</NavLink></li> 
                    <li className={`${list}`}><NavLink to={"/crew"} ><span className="text-[#fff] font-[900]">02</span> Crew</NavLink></li> 
                    <li className={`${list}`}><NavLink to={"/technology"}><span className="text-[#fff] font-[900]">03</span> Technology</NavLink></li> 
                </ul>
            </div>

        </div>



{/* small size Navbar */}
        <div className="md:hidden flex justify-between items-center mt-5">

        <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 z-40" width="48" height="48"><g fill="none"
      fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
     <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 
     24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>

          <div className="mr-5 z-40">
            <FiAlignRight alt="menu" onClick={()=>dispatch({type:"isOpen"})} className="h-[24px] cursor-pointer z-10 w-[24px]"/>
          </div>
          
               {<MobileSlider/>} 
        </div>

        
        </>
    );


    
}

export default Header