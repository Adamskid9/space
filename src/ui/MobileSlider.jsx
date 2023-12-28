import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MobileSlider() {
    const {IsOpen:{isOpen},Slider:{cur}} = useSelector((fam)=>fam);
    const dispatch = useDispatch();
console.log(cur,isOpen)
    const slid = function(num){
        dispatch({type:"slider",payload:num})
    }
   

    return (
        <div onClick={()=>dispatch({type:"isOpen"})} className={`absolute transition-all duration-500 right-0 
        top-0 backdrop-blur-smd z-10 ${isOpen?"h-full w-screen":"h-0 w-0"} overflow-hidden backdrop-blur-[5px] bg-transparent `}>

            <div className={`${isOpen?"h-[100%] w-[40%]":"h-0 w-0"} transition-all duration-500 bg-trans absolute top-0 right-0`}>
            <ul className="flex mt-28 ml-5 flex-col space-y-5 uppercase text-base  text-bgrays font-condensed items-start justify-center">
                    <li onClick={()=>slid(0)} className="list relative"><Link className={`${0===cur?"active":""}`} to={"/"}><span className="mr-3 text-white">00</span>Home</Link></li>
                    <li onClick={()=>slid(1)} className="list relative"><Link className={`${1===cur?"active":""}`} to={"/destination"}><span className="mr-3 text-white">01</span>Destination</Link></li> 
                    <li onClick={()=>slid(2)} className="list relative"><Link className={`${2===cur?"active":""}`} to={"/crew"}><span className="mr-3 text-white">02</span>Crew</Link></li> 
                    <li onClick={()=>slid(3)} className="list relative"><Link className={`${3===cur?"active":""}`} to={"/technology"}><span className="mr-3 text-white">03</span>Technology</Link></li> 
        </ul>
            </div>

        </div>
    )
};

export default MobileSlider
