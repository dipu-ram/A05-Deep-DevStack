
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-col md:flex-row gap-8 px-8 py-12">
        <div className='flex-1 bg-gray-50 p-6 rounded-lg shadow'>
          
        </div>
        <div className='flex-1 bg-gray-50 p-6 rounded-lg shadow'>
          
        </div>
      </div>
       <Technologies />
       <Footer />
    </>
  )
}

export default App;