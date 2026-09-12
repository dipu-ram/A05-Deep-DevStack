import banner from "../assets/banner-stack.png";
function Hero() {
     return (
          <section className="flex justify-between items-center px-10 py-16 bg-white">
               <div className="max-w-lg">
                   <h2 className="text-5xl fort-blod leading-tight">
                      Build Your Ideal{" "}
                      <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text-transparent">
                          Development Stack
                      </span>
                   </h2>
                   <p className="mt-6 text-gray-600">
                     Explore frontend, backend, database, and tooling options, compare them
                     side by side, and put together the stack that fits your next project.
                   </p>
                   
               
                
      <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Explore Technologies</button>
          <button className="px-6 py-3 border rounded">Learn More</button>

      </div>
      </div>
      <img src={banner} alt="Dev Stack Banner" className="w-[400px] h-[300] object-contain"/>
          </section>
     );
}
export default Hero;