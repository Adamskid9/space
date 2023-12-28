import Footer from "../ui/Footer"
import Header from "../ui/Header"

function Home() {
  const style = `text-grays font-Barlow`

    return (
        <div className="absolute h-[650px] sm:h-[700px] w-full bg-[100%] bg-cover
        bg-[url(/assets/home/background-home-mobile.jpg)] 
        md:bg-[url(/assets/home/background-home-desktop.jpg)] text-white">

            <Header/>   
            
      <div className="absolute w-[80%] sm:w-[70%] md:w-[60%] h-[50%] md:top-[50%] top-[43%] justify-center items-center
             left-[50%] translate-x-[-50%] translate-y-[-50%] md:flex" >

   <div className=" basis-4/6 text-center md:text-start">
     <h4 className=" uppercase text-sm font-condensed tracking-[2.725px] text-grays">So you want to travel to</h4> 
     <h1 className="uppercase text-[#ff] text-6xl text-[75px]s tracking-[5px] font-[400] leading-normal font-Bellefair ">Space</h1>
     <span className={`${style} mt-5`}>Let’s face it; if you want to go to space, you might as </span> 
     <span className={`${style}`}> well genuinely go to outer space and not hover kind of</span>
     <span className={`${style}`}> on the edge of it. Well sit back, and relax because</span>
     <span className={`${style}`}>we’ll give you a truly out of this world experience!</span>
   </div> 

 <div className="flex-1 flex items-center justify-center">
       <div className="bg-white cursor-pointer btn relative transition-all duration-1000 mt-6s sm:mt-20 mt-16
       text-[#0B0D17] font-Bellefair rounded-[100%] tracking-[2px] leading-normal font-[300] text-[20px] 
        flex items-center justify-center -ml-5 md:ml-20 h-[130px] w-[130px] sm:h-[150px] sm:w-[150px]">EXPLORE</div>
 </div>

            </div>

            <Footer parent={"bottom-0 absolute w-full"} styles={"flex justify-center items-center"}/>
        
        </div>
    )
};

export default Home


