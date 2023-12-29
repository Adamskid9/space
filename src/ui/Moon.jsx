function Moon() {
    return (
        <div className="flex flex-col  ">
            <h1 className="my-10 text-4xl sm:text-7xl uppercase font-Bellefair flex
             items-center justify-center md:justify-start">moon</h1>
            <div className="text-grays flexs flex-colx">
                <span>See our planet as you’ve never seen it before. A per-</span>
                <span>fect relaxing trip away to help regain perspective </span>
                <span>and come back refreshed. While you’re there,</span>
                <span>take in some history by visiting the Luna 2 </span>
                <span>and Apollo 11 landing sites.</span>
            </div>
        
            <hr className="mt-10"/>
        
            <div className="flex items-center text-base mt-4 space-x-10 justify-center sm:justify-between ">
               <div className="flex flex-col">
                  <span className="uppercase text-grays">Avg. distance</span>
                  <span className="mt-2 text-xl md:text-3xl font-Bellefair">384,400 km</span>
               </div>
            
               <div className="flex flex-col" >
                <span className="uppercase text-grays">Est. travel time</span>
                <span className="mt-2 text-xl md:text-3xl font-Bellefair">3 days</span>
               </div>
            </div>
           

        </div>
    )
}

export default Moon
