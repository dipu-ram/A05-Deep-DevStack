import { technologies, type Tech } from "../data/technologies";

function Technologies() {
    console.log("Technologies data:", technologies);
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Explore the Technologies</h2>
      <p className="text-lg text-gray-600 mt-2 py-6">
          Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech: Tech) => (
        <div 
        key={tech.name} 
        className="border rounded-md p-6 shadow-sm hover:shadow-md transition bg-gray-50">
         
         <img
         src={tech.image}
         alt={tech.name}
         className="w-16 h-16 mb-4 object-contain"
          />

          <h3 className="text-lg font-semibold text-purple-600 mb-2"> {tech.name}</h3>
          <p className="text-sm text-gray-600 mb-1"> Category: {tech.category}</p>
          <p className="text-sm text-gray-600 mb-1">Difficulty: {tech.difficulty}</p>
          <p className="text-sm text-gray-600 mb-3">Rating: ⭐ {tech.rating}</p>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition">Add to Stack</button>
          
        </div>
      ))}
      </div>
    </section>
      );
}

export default Technologies;