
import Navbar from './components/shared/Navbar'
import SolarSystem from './components/SolarSystem'

function App() {

  return (
      <div className=' h-[400vh] bg-gray-900 relative overflow-hidden'>
        <SolarSystem/>
        <div className=" absolute top-[5%] left-[15%] rounded-full shadow-[0_0_250px_90px] shadow-yellow-300"/>
        <div className='relative z-20 h-screen flex flex-col'>
          <Navbar/> 
          <div className='px-20 my-auto space-y-4'>
            <h1 className='text-6xl text-gray-50 font-bold tracking-wide'>Trusted Multi-Chain <br/><span className='text-yellow-300'>DEX</span> Platform</h1>
            <p className='text-gray-400 text-lg font-mono font-medium'>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            <div className='pt-8 space-x-8'>
              <button className="px-4 py-2 bg-gradient-to-br from-yellow-400 to-yellow-200 text-gray-800 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-300  transition-all duration-200 delay-75">Connect Wallet</button>
              <button className="px-4 py-2 text-yellow-500 rounded-full font-bold text-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200 delay-75">Trade Crypto</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
