
import { BrowserRouter } from 'react-router-dom'
import {Navbar , Hero , Featured , BuyCrypto, CoinsList , NewsAndUpdates , JournyCrypto , Footer} from './components'
import { DataProvider } from './context/DataContext'


function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className='relative z-0 '>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
            <Navbar />
            <Hero/>
          </div>
          <div className='relative z-0 '>
            <div className='bg-[#e3f2fd] py-14 mt-0 md:mt-28'>
                <Featured />
            </div>
          </div>
          <BuyCrypto />
          <CoinsList  />  

          <div className='relative z-0 '>
            <div className='bg-[#e3f2fd] py-14 mt-0 md:mt-28'>
                <NewsAndUpdates />   
            </div>
          </div>
          <JournyCrypto />

          <div className='relative z-0 '>
            <div className='bg-[#e3f2fd] py-14 mt-0 md:mt-28'>
              <Footer />
            </div>
          </div>


        </div>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
