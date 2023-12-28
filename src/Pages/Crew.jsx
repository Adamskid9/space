import CrewContent from "../ui/CrewContent"
import Footer from "../ui/Footer"
import Header from "../ui/Header"

function Crew() {

    return (
        <div className="h-[700px] absolute w-full bg-[100%] bg-cover 
        sm:bg-[url(/assets/crew/background-crew-desktop.jpg)]
        bg-[url(/assets/crew/background-crew-mobile.jpg)] text-white">
          <Header/>

          <div className="absolute sm:h-[60%] md:h-[50%] sm:w-[80%] w-[60%] lg:w-[60%] flex flex-col 
           top-[38%] -translate-y-[30%]
           md:top-[50%] left-[50%] -translate-x-[50%] md:-translate-y-[50%]">
              
               <div className="-ml-5 tracking-[2px]"><span>02</span> MEAT YOUR CREW</div>
               
               <CrewContent/>

          </div>

          <Footer parent={"bottom-0 absolute w-full"} styles={"flex justify-center items-center"}/>
        </div>
    )
}

export default Crew
