function Mars() {
    return (
        <div className="flex flex-col ">
        <h1 className="my-10 text-5xl sm:text-7xl uppercase font-Bellefair flex items-center justify-center md:justify-start">Mars</h1>
        <div className="text-grays flexs flex-colx">
            <span>Don’t forget to pack your hiking boots. You’ll need them to tac-</span>
            <span>kle Olympus Mons, the tallest planetary mountain in our </span>
            <span>solar system. It’s two and a half times the size of Everest!</span>
        </div>
    
        <hr className="mt-10"/>
    
        <div className="flex items-center mt-4 space-x-10 justify-center sm:justify-between">
           <div className="flex flex-col">
              <span className="uppercase text-grays">Avg. distance</span>
              <span className="mt-2 text-3xl font-Bellefair">225 mil. km</span>
           </div>
        
           <div className="flex flex-col" >
            <span className="uppercase text-grays">Est. travel time</span>
            <span className="mt-2 text-3xl font-Bellefair">9 months</span>
           </div>
        </div>
       

    </div>
    )
}

// Mars

//   Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
//   the tallest planetary mountain in our solar system. It’s two and a half times 
//   the size of Everest!

//   Avg. distance
//   225 mil. km

//   Est. travel time
//   9 months

export default Mars
