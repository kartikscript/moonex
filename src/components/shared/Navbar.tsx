

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
            <a key={item} className="font-semibold tracking-wide text-gray-50 ">{item}</a>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar