import { useEffect, useState } from "react";
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Tech } from "./data/technologies";


function App() {
  const [technologyData, setTechnologyData] = useState<Tech[]>([]);
   const [loading, setLoading] = useState(true);
 useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
 if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading technologies...</p>
      </div>
    );
  }
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
             <Technologies technologies={technologyData} />

       <Footer />
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;