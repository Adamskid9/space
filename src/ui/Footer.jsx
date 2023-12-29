function Footer({styles,parent}) {
    
    return (
        <div className={`${parent} py-2 sm:p-5 bg-blue-900`}>
          <div className={`${styles} text-black tracking-[1px] font-[600] text-sm sm:text-base font-Bellefair `}>
            Coded by<span className="mx-1 text-white">Adam</span>,Challenge by<span className="ml-1 text-white">Frontend Mentor</span>
          </div>
        </div>
    )
}

export default Footer
