import banner from "../assets/banner-stack.png";
function Hero() {
     return (
          <section className=" container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 pt-8 pb-16 bg-white">
               <div className="max-w-lg text-center md:text-left">
                   <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      Build Your Ideal{" "}
                      <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                          Development Stack
                      </span>
                   </h2>
                   <p className="mt-6 text-gray-600 leading-relaxed">
                     Explore frontend, backend, database, and tooling options, compare them
                     side by side, and put together the stack that fits your next project.
                   </p>
                   
      <div className="mt-8 flex gap-4 items-center">
          <button className=" px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">Explore Technologies</button>
          <button className="px-6 py-3 border rounded">Learn More</button>

      </div>
      </div>
      <img src={banner} alt="Dev Stack Banner" className="w-full md:w-[450px] h-auto mt-10 md:mt-0 object-center"/>
          
          
          </section>
     );
}
export default Hero;