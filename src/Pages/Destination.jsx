import { Outlet } from "react-router-dom"
import DestinationNavigator from "../ui/DestinationNavigator"
import Footer from "../ui/Footer"
import Header from "../ui/Header"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Loader from "../ui/Loader"


function Destination() {
  const [imgData,setImgData] = useState([]);

  const x = useSelector((cur)=>cur.currentDes);
  console.log(x)
  const {cur} = x;

  useEffect(function(){
    async function api(){
     const req = await fetch(`http://localhost:8000/destinations`);
     const data = await req.json();
     setImgData(data)
     console.log(data)

    }

    api()

  },[])

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
