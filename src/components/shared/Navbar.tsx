

const Navbar = () => {
  return (
    <div className="z-20 relative px-20 py-14 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
        src="/images/logo.png"
        alt="logo"
        width={50}
        height={50}
        />
        <h1 className=" text-yellow-300 font-mono text-2xl tracking-wide ">MOONEX</h1>
      </div>
      <div className="flex gap-16">
        {
          ['Home','About','Roadmap','FAQs','Contact Us'].map(item=>(
            <a href="/" key={item} className="font-semibold tracking-wide text-gray-50 hover:text-yellow-300 transition-all duration-200">{item}</a>
          ))
        }
      </div>
      <button className="px-4 py-2 bg-gradient-to-br from-yellow-400 to-yellow-200 text-gray-800 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-300  transition-all duration-200 delay-75">Connect Wallet</button>
    </div>
  )
}

export default Navbar