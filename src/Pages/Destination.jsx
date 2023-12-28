import { Outlet } from "react-router-dom"
import DestinationNavigator from "../ui/DestinationNavigator"
import Footer from "../ui/Footer"
import Header from "../ui/Header"
import {  useState } from "react"
import { useSelector } from "react-redux"
import Loader from "../ui/Loader"


const mainData = [
  {
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-moon.png",
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": "./assets/destination/image-mars.png",
      "webp": "./assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": "./assets/destination/image-titan.png",
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]

function Destination() {
  const [imgData,setImgData] = useState(mainData);

  const x = useSelector((cur)=>cur.currentDes);
  console.log(x)
  const {cur} = x;



  if (!imgData.length) return <Loader/>;

  const {images:{png},name} = imgData[cur]
   console.log(png)
  
     

    return (
        <div className="md:h-[800px] h-[900px] absolute w-full bg-[100%] bg-cover 
        bg-[url(/assets/destination/background-destination-mobile.jpg)] 
        sm:bg-[url(/assets/destination/background-destination-desktop.jpg)]
         text-white">
          <Header/>
          
          <div className="absolute w-[90%] md:w-[70%] top-[53%] 
          left-[50%] -translate-y-[50%] -translate-x-[50%] flex flex-col justify-between">

                <div className="tracking-[2px] absolute md:top-16 lg:top-0"><span>01</span> PICK YOUR DESTINATION</div>

              <div className="flex mt-[40px]  space-y-10 md:space-x-8 lg:space-x-16 flex-col md:flex-row ">
                <img className="lg:h-[350px] lg:w-[350px] md:w-[300px] md:h-[300px]  md:mt-0 h-[250px] w-[250px] basis-1/4 self-center" src={`${png.slice(1)}`} alt={name}/>
                <div className="flex flex-col flex-1">
                    <DestinationNavigator/>
                    <Outlet/>
                </div>
              </div>

          </div>

          <Footer parent={"bottom-0 absolute w-full"} styles={"flex justify-center items-center"}/>
    
        </div>
    )
}

export default Destination
