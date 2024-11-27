
import { FaDollarSign, FaPhoneSlash, FaReddit, FaTelegram, FaTwitter } from 'react-icons/fa'
import Navbar from './components/shared/Navbar'
import SolarSystem from './components/SolarSystem'
import { LuMinus, LuShieldCheck } from 'react-icons/lu'
import { AiOutlineControl } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { faqList } from './components/constants'
import { useState } from 'react'

function App() {

  const [ActiveQueryId, setActiveQueryId] = useState<number|null>(null)

  const handleFAQList=(id:number)=>{
    if(ActiveQueryId === id)setActiveQueryId(null)
    else setActiveQueryId(id)
  }
  return (
      <div className=' bg-[#071624] text-gray-50 relative overflow-hidden'>
        <SolarSystem/>
        <main className='relative z-20 h-screen flex flex-col'>
          <div className=" absolute top-[20%] left-[15%] rounded-full shadow-[0_0_250px_90px] shadow-yellow-200"/>
          <div className=" absolute bottom-[30%] right-[15%] rounded-full shadow-[0_0_250px_60px] shadow-yellow-200"/>
          <Navbar/> 
          <div className='px-10 sm:px-20 my-auto space-y-4'>
            <h1 className='text-6xl font-bold tracking-wide'>Trusted Multi-Chain <br/><span className='text-yellow-300'>DEX</span> Platform</h1>
            <h3 className='text-gray-400 text-lg font-mono font-medium'>Trade, earn, and own crypto on the all-in-one multi-chain DEX</h3>
            <div className='pt-8 sm:space-x-8 sm:block flex flex-col items-center gap-6'>
              <button className="px-4 py-2 bg-gradient-to-br from-yellow-400 to-yellow-200 text-gray-800 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-300  transition-all duration-200 delay-75">Connect Wallet</button>
              <button className="px-4 py-2 text-yellow-500 rounded-full font-bold text-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200 delay-75">Trade Crypto</button>
            </div>
          </div>
        </main>
        <div className='px-6 sm:px-16 mt-4 md:mt-40'>
          <section className='space-y-14'>
            <h2 className='text-3xl sm:text-4xl font-mono text-center sm:text-start sm:pl-14 font-bold tracking-wide'>Why <span className='text-yellow-500'>MoonEX</span> ?</h2>
            <div className='relative px-3 sm:px-10 pt-8 pb-12 rounded-2xl bg-gray-900'>
              <div className=" absolute bottom-[5%] left-[40%] rounded-full shadow-[0_0_300px_60px] shadow-yellow-200"/>
              <div className='absolute top-auto bottom-auto left-[33%] h-[90%] w-[1px] bg-gray-700 '/>
              <div className='absolute top-auto bottom-auto left-[66%] h-[90%] w-[1px] bg-gray-700 '/>
              <table className=" w-full ">
                <thead>
                  <tr className='text-sm md:text-lg lg:text-2xl font-mono tracking-wider grid grid-cols-3 justify-items-center gap-2 *:py-8'>
                    <th className='text-yellow-400'>Comparision</th>
                    <th className='inline-flex gap-2 text-yellow-400'><img src='/images/logo.png' alt='logo' width={30} height={30}/> MOONEX</th>
                    <th className='text-pink-400'>UNISWAP</th>
                  </tr>
                </thead>
                <tbody className='text-lg text-gray-400  tracking-wide *:border-t last:*:border-b *:border-gray-700 *:grid *:grid-cols-3 *:justify-items-center '>
                  {
                    ['1. Point no one','2. Point no one','3. Point no one','4. Point no one','5. Point no one']
                      .map(item=>(
                          <tr key={item} className='*:py-6   md:*:pl-10 lg:*:pl-20'>
                            <td className='place-self-start'>{item}</td>
                            <td >✔</td>
                            <td >❌</td>
                          </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
          </section>
          <section className='mt-16 space-y-10'>
            <h2 className='text-4xl text-center font-mono px-14 font-bold tracking-wide'>Our <span className='text-yellow-500'>Features</span></h2>
            <main className='grid sm:grid-cols-2 xl:grid-cols-4 gap-8'>
              <div className='space-y-3 bg-gray-900 p-8 rounded-2xl'>
                <FaDollarSign className='stroke-white size-12 bg-gray-800 p-3 mb-8 rounded-full'/>
                <h2 className='text-lg font-medium'>Cheapest TXs</h2>
                <p className='text-gray-300'>Exchange popular digital currencies at the cheapest possible transaction price</p>
              </div>
              <div className='space-y-3 bg-gray-900 p-8 rounded-2xl'>
                <LuShieldCheck className='stroke-white size-12 bg-gray-800 p-3 mb-8 rounded-full'/>
                <h2 className='text-lg font-medium'>CerTIK</h2>
                <p className='text-gray-300'>Exchange popular digital currencies at the cheapest possible transaction price</p>
              </div>
              <div className='space-y-3 bg-gray-900 p-8 rounded-2xl'>
                <FaPhoneSlash className='stroke-white size-12 bg-gray-800 p-3 mb-8 rounded-full'/>
                <h2 className='text-lg font-medium'>No Contract Sells</h2>
                <p className='text-gray-300'>Exchange popular digital currencies at the cheapest possible transaction price</p>
              </div>
              <div className='space-y-3 bg-gray-900 p-8 rounded-2xl'>
                <AiOutlineControl className='stroke-white size-12 bg-gray-800 p-3 mb-8 rounded-full'/>
                <h2 className='text-lg font-medium'>CrossDex Support</h2>
                <p className='text-gray-300'>Exchange popular digital currencies at the cheapest possible transaction price</p>
              </div>
            </main>
          </section>
          <section className='relative h-screen flex items-center'>
          <div className=" absolute bottom-[5%] left-[0%] rounded-full shadow-[0_0_300px_60px] shadow-yellow-200"/>
          <div className=" absolute top-[30%] right-[0%] rounded-full shadow-[0_0_300px_60px] shadow-yellow-200"/>

            <div className=' sm:w-[90%] xl:w-[70%]  mx-auto space-y-6 bg-gray-900 rounded-2xl py-6'>
              <h2 className='text-3xl text-center  font-mono px-14 font-bold tracking-wide'>FAQs</h2>
              <main className=''>
                {
                  faqList.map(({id,query,solution})=>(
                    <div key={id} onClick={()=>handleFAQList(id)} className='flex items-center justify-between gap-6 px-4 sm:px-10 lg:px-20 py-6 border-y border-gray-800 cursor-pointer'>
                      <div className='space-y-4'>
                        <h2 className='text-sm sm:text-lg'>{query}</h2>
                        {ActiveQueryId===id && <p className='text-gray-500'>{solution}</p>}
                      </div>
                      {ActiveQueryId===id ?(
                        <LuMinus className='stroke-white size-8 bg-gray-800 p-1 rounded-full'/>
                      ):(
                        <IoIosAdd className='stroke-white size-8 bg-gray-800 p-1 rounded-full'/>
                      )
                      }
                    </div>
                  ))
                }
              </main>
            </div>
          </section>
        </div>
        <footer className='h-[40vh] bg-gray-950 px-10 lg:px-20 py-16 space-y-10 lg:flex  justify-between items-center'>
          <div className="flex flex-col items-center gap-2">
            <img
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            />
            <h1 className=" flex-1 text-yellow-300 font-mono text-2xl tracking-wide ">MOONEX</h1>
          </div>
          <div className=" text-center space-y-2 sm:flex justify-center gap-10">
            {
              ['Home','About','Roadmap','FAQs','Contact Us'].map(item=>(
                <a href="/" key={item} className="font-semibold block tracking-wide text-gray-50 hover:text-yellow-300 transition-all duration-200">{item}</a>
              ))
            }
          </div>
          <div className='flex flex-col gap-3 items-center'> 
           <h2 className='text-2xl text-center font-mono px-14 font-bold '>Contact <span className='text-yellow-500'>Us</span></h2>
            <div className='flex gap-12 *:size-6'>
              <FaTelegram/>
              <FaReddit/>
              <FaTwitter/>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App
