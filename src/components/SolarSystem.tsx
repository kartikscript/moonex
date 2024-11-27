

const SolarSystem = () => {
  return (
    <div className="opacity-50 sm:opacity-100">
      {/* Orbits */}
      <div className="left-52 top-2  absolute skew-y-[25deg] skew-x-[20deg] -rotate-[28deg]  border border-gray-600 rounded-full  w-[600px] h-[600px] "/>
      <div className="left-20 -top-32  absolute skew-y-[25deg] skew-x-[20deg] -rotate-[28deg]  border border-gray-600 rounded-full  w-[900px] h-[900px] "/>
      <div className="-left-20 -top-72  absolute skew-y-[25deg] skew-x-[20deg] -rotate-[28deg]  border border-gray-600 rounded-full  w-[1250px] h-[1250px] "/>
      

    {/* Sun */}
      <div className="absolute  right-36 top-48 size-44 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 from-20% "/>

      {/* Stars */}
       <img
        className=" absolute left-32 top-40"
        src={'/images/star.png'}
        alt="star"
        width={30}
        height={30}
       />
       <img
        className=" absolute right-52 top-32"
        src={'/images/star.png'}
        alt="star"
        width={25}
        height={25}
       />
       <img
        className=" absolute top-[20%] right-52 "
        src={'/images/star.png'}
        alt="star"
        width={30}
        height={30}
       />
  </div>
  )
}

export default SolarSystem