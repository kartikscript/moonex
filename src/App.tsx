
import Navbar from './components/shared/Navbar'
import SolarSystem from './components/SolarSystem'

function App() {

  return (
      <div className='h-[400vh] bg-gray-900 relative overflow-hidden'>
        <SolarSystem/>
        <div className="z-30 absolute top-[5%] left-[15%] rounded-full shadow-[0_0_250px_90px] shadow-yellow-300"/>

          <Navbar/> 
        <div className='z-50'>

        </div>
        
      </div>
  )
}

export default App
