import Footer from "../ui/Footer"
import Header from "../ui/Header"
import TechContent from "../ui/TechContent"

function Technology() {
    return (
        <div className="absolute h-[800px] md:h-[730px] w-full bg-[100%] bg-cover
        sm:bg-[url(/assets/technology/background-technology-desktop.jpg)] text-white
        bg-[url(/assets/technology/background-technology-mobile.jpg)]
        ">

            <Header/>
            
            <TechContent/>

          <Footer parent={"bottom-0 absolute w-full"} styles={"flex justify-center items-center"}/>
        </div>
    )
}

export default Technology
