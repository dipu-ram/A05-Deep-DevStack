import { useEffect, useState } from "react";
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import type { Tech } from "./data/technologies";


function App() {
  const [technologyData, setTechnologyData] = useState<Tech[]>([]);
 useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologyData(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  console.log(technologyData);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-col md:flex-row gap-8 px-8 py-12">
        <div className='flex-2 bg-gray-50 p-6 rounded-lg shadow'>
          
        </div>
        <div className='flex-1 bg-gray-50 p-6 rounded-lg shadow'>
          
        </div>
      </div>
             <Technologies technologies={technologyData} />

       <Footer />
    </>
  );
}

export default App;