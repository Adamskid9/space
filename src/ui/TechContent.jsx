import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"

function TechContent() {
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    
    const {cur} = useSelector((operation)=>operation.currentTech)


    useEffect(function(){
        async function api(){
         const req = await fetch(`http://localhost:8000/technology`);
         const data = await req.json();

         console.log(data);
         setData(data)
        }
   api();


    },[])

    if(!data.length)return;

    const {description,images:{landscape,portrait},name}= data[cur];

    function handleChanger(num){
        dispatch({type:"contentTech",payload:num})
    }


    return (
        <div className="absolute flex flex-col md:w-[90%] lg:w-[60%]  w-[70%] sm:w-[60%] top-[53%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
             <div className="-ml-5 uppercase text-[1rem] mb-3 md:mb-0 text-center md:text-start font-normal tracking-[2px]"><span className="text-bgrays">03</span> MEAT YOUR CREW</div>

             <div className="flex md:space-x-20 flex-col md:flex-row">
                <div className="flex space-y-8 md:space-x-5 basis-2/4 self-center justify-center md:flex-row flex-col">
                    <div className="space-x-5 md:space-x-0 md:space-y-5  mt-8 md:mt-0 flex justify-center items-center md:flex-col">
                        {data.map((_,i)=><div onClick={()=>handleChanger(i)} className={`cursor-pointer ${cur===i?"bg-white text-black":"bg-none text-white"}
                         ring-1 md:w-[3.3rem] md:h-[3.3rem] h-[3rem] w-[3rem] flex justify-center items-center  ring-white hover:bg-bgrays
                         rounded-[100%]`}>{i+1}</div>)}
                    </div>

                     <div className="space-y-4 flex flex-col justify-center items-center md:justify-start md:items-start ">
                       <h2 className="uppercase opacity-[0.8] text-lg font-Bellefair">THE TERMINOLOGY...</h2>
                       <h1 className="uppercase font-Bellefair text-2xl sm:text-3xl">{name}</h1>
                       <p className="opacity-[0.8] text-center md:text-start text-sm md:text-base">{description}</p>
                     </div>              
                </div>

{/*image side element*/}
                <div className="flex-1 -order-1 md:order-1 md:self-center flex justify-center items-center">
                    <img className="h-[60%] w-[60%] md:h-full md:w-full " src={`${portrait.slice(2)}`} alt=""/>
                </div>
             </div>
        </div>
    )
}

export default TechContent
