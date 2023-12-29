function Footer({styles,parent}) {
    
    return (
        <div className={`${parent} p-2  sm:p-5 bg-blue-900`}>
          <div className={`${styles} font-[600] tracking-[.3px] text-sm sm:text-base font-Bellefair `}>
            Coded by Adam, Challenge by Frontend Mentor
          </div>
        </div>
    )
}

export default Footer
