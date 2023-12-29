import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux";


const mainData = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]




function CrewContent() {
    const [data,setData] = useState(mainData);
    const dispatch = useDispatch();
    
    const {cur:curData} = useSelector((manage)=>manage.currentCre);
    
 


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
           <p className=" text-center text-base sm:text-left leading-[22px] opacity-[0.8] text-white">{bio}</p>

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
