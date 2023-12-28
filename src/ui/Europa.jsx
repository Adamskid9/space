function Europa() {
    return (
        <div className="flex flex-col ">
        <h1 className="my-10 text-5xl sm:text-7xl uppercase font-Bellefair flex items-center 
        justify-center md:justify-start ">europa</h1>
        <div className="text-grays flexs flex-colx">
            <span>The smallest of the four Galilean moons orbiting Jupiter,</span>
            <span>winter lover’s dream. With an icy surface, it’s perfect</span>
            <span>for a bit of ice skating, curling, hockey, or simple relaxation in</span>
            <span>your snug wintery cabin. </span>

        </div>
    
        <hr className="mt-10"/>
    
        <div className="flex items-center mt-4 space-x-10 justify-center sm:justify-between">
           <div className="flex flex-col">
              <span className="uppercase text-grays">Avg. distance</span>
              <span className="mt-2 text-3xl font-Bellefair"> 628 mil. km</span>
           </div>
        
           <div className="flex flex-col" >
            <span className="uppercase text-grays">Est. travel time</span>
            <span className="mt-2 text-3xl font-Bellefair">3 years</span>
           </div>
        </div>
       

    </div>
    )
}


export default Europa
