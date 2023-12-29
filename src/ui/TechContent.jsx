import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"


const mainData = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

function TechContent() {
    const [data,setData] = useState(mainData);
    const dispatch = useDispatch();
    
    const {cur} = useSelector((operation)=>operation.currentTech)




    if(!data.length)return;

    const {description,images:{landscape,portrait},name}= data[cur];

    function handleChanger(num){
        dispatch({type:"contentTech",payload:num})
    }


    return (
        <div className="absolute flex flex-col md:w-[90%] lg:w-[60%]  w-[70%] sm:w-[60%] top-[53%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
             <div className="-ml-5 uppercase text-[1rem] mb-3 md:mb-0 text-center md:text-start font-normal tracking-[2px]"><span className="text-bgrays">03</span> space technology</div>

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
                       <p className="opacity-[0.8]  text-center md:text-start text-base sm:text-sm md:text-base ">{description}</p>
                     </div>              
                </div>

{/*image side element*/}
                <div className="flex-1 -order-1 md:order-1 md:self-center flex justify-center items-center">
                    <img className="h-[60%] w-[70%] sm:w-[60%] md:h-full md:w-full " src={`${portrait.slice(2)}`} alt=""/>
                </div>
             </div>
        </div>
    )
}

export default TechContent
