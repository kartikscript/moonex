import { useState } from "react"
import { IoIosMenu } from "react-icons/io"


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <div className="z-20 relative px-8 lg:px-20 py-14 flex justify-between items-center gap-8">
      <div className="flex  items-center gap-2">
        <img
        className="xl:size-[50px] size-[40px] "
        src="/images/logo.png"
        alt="logo"
        
        />
        <h1 className=" text-yellow-300 font-mono text-lg lg:text-xl xl:text-2xl tracking-wide ">MOONEX</h1>
      </div>
      <div className=" hidden md:flex  md:gap-8 xl:gap-16">
        {  
          ['Home','About','Roadmap','FAQs','Contact Us'].map(item=>(
            <a href="/" key={item} className="font-semibold md:text-sm xl:text-base tracking-wide text-gray-50 hover:text-yellow-300 transition-all duration-200">{item}</a>
          ))
        }
      </div>
      <div className="inline-flex gap-4 sm:gap-10">
        <button className="p-1 sm:px-4 sm:py-2 bg-gradient-to-br from-yellow-400 to-yellow-200 text-gray-800 rounded-full font-bold text-xs xl:text-sm hover:from-yellow-500 hover:to-yellow-300  transition-all duration-200 delay-75">Connect Wallet</button>
        <IoIosMenu 
         onClick={()=>setOpenMenu(true)}
         className="md:hidden size-10  cursor-pointer"
        />
      </div>
      <div 
       onClick={()=>setOpenMenu(false)}
       className={`fixed right-0 top-0 w-full ${openMenu ?'h-full ':'h-0 '} overflow-hidden z-50 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-200`}
       >
        <div className="flex  items-center gap-6 mb-16" >
        <img
        className="size-[80px] "
        src="/images/logo.png"
        alt="logo"
        
        />
        <h1 className=" text-yellow-300 font-mono text-4xl tracking-wide ">MOONEX</h1>
      </div>
        {openMenu&&<div className="fixed top-0 right-0 size-full bg-black/40 z-40"/>}
        {  
          ['Home','About','Roadmap','FAQs','Contact Us'].map(item=>(
            <a href="/" key={item} className={`${openMenu ?'opacity-100 bg-white/20':'opacity-0 bg-white/50'} relative z-50 font-semibold text-3xl  py-4 px-8 rounded-full tracking-wide text-gray-50 hover:text-yellow-300 transition-all delay-200 duration-500`}>
              {item}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar