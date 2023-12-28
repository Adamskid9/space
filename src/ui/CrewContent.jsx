import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function CrewContent() {
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    
    const {cur:curData} = useSelector((manage)=>manage.currentCre);
    
 
    useEffect(function(){
        async function api(){
            const req = await fetch(`http://localhost:8000/crew`);
            const data = await req.json();
            setData(data)
        }
        api()
    },[]);

    function cur (num){
        dispatch({type:"contentCrew",payload:num})
    }


  if(!data.length) return;
   const {bio, role, images:{png}, name } = data[curData];



    return (
        <div className="flex w-full md:mt-8 h-[90%] sm:space-x-10 md:space-x-16 sm:flex-row flex-col ">

        <div className="flex flex-col  basis-3/6 items-center justify-center sm:justify-start sm:items-start">
           <h3 className="mb-3 text-lg sm:text-1xl uppercase font-[400] font-Bellefair opacity-[0.8dd] text-bgrays">{role}</h3>
           <h2 className="mb-3 text-xl sm:text-3xl uppercase">{name}</h2>
           <p className="text-sm text-center sm:text-base  sm:text-left leading-[22px] opacity-[0.8] text-white">{bio}</p>

           <div className="flex sm:order-1 -order-1 justify-center space-x-6 md:space-x-5 mt-10 sm:mt-auto mb-5 ">
               {data.map((_,i)=><span onClick={()=>cur(i)} className={`h-4 w-4 hover:bg-white transition-all duration-500 ${i===curData?"bg-white":"bg-bgrays"} cursor-pointer rounded-[100%]`}></span>)}
           </div>
        </div>
        
        <div className="flex-1 mt-5 md:mt-0 flex sm:justify-start sm:items-start justify-center items-center sm:order-1 -order-1">
            <img className="md:h-full sm:h-[80%] sm:w-[80%] h-[50%] w-[50%]" src={png.slice(2)} alt={name}/>
        </div>

       </div>
    )
};


export default CrewContent
