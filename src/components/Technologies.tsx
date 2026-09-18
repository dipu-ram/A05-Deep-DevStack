import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import type { Tech } from "../data/technologies"
type TechnologiesProps = {
  technologies: Tech[];
};


function Technologies({ technologies }: TechnologiesProps) {
  const [stack, setStack] = useState<Tech[]>([]);

  const handleAddToStack = (tech:Tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already added to stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemove =(id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
     toast.error("All technologies removed!");
  };

  return (
    <section className="container mx-auto px-6 py-12 bg-white">
       <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-4">
        Explore the Technologies
      </h2>

      <p className="text-lg text-gray-600 mb-8">
         Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technologies.map((tech: Tech) => {
              const isAdded = stack.some(
                (item) => item.id === tech.id
              );
              return (
                <div
                  key={tech.id}
                  className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-gray-50" 
                  >
               
                <img 
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {tech.description}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  category: {tech.category}
                </p>                
                  <p className="text-sm text-gray-600 mb-1">
                    Difficulty: {tech.difficulty}
                  </p>                 
                  <p className="text-sm text-gray-600 mb-4">
                    Rating: ⭐ {tech.rating}
                  </p>

                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2 rounded-md font-semibold transition ${
                      isAdded
                      ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                        }`}
                        >
                        {isAdded
                        ?"✓ Added to Stack"
                          : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="border rounded-xl p-5 shadow-md bg-white sticky top-6">

            <div>
              <h2 className="flex items-center justify-between mb-5">
                        Your Stack
                </h2> 
              <div className="text-xl font-bold text-gray-800">

                <p className="text-sm text-gray-500">
                  {stack.length} {stack.length === 1 ? "Technology selected" : "Technologies selected"}
                    </p>


                {stack.length > 0 && (
                  <button
                     onClick={handleRemoveAll}
                  className="text-sm text-red-500 hover:text-red-700 font-semibold"
                  >
                  Remove All
                
                  </button>
                )}               
              </div>
              {stack.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-400 text-sm">
                  No technologies added yet.
                </p>
                   <p className="text-gray-400 text-xs mt-2">
                  Add technologies from the list.
                </p>
                </div>
              )}

              {stack.length > 0 && (
                <div className="space-y-3">
                  {stack.map((item) => (
                    <div
                    key={item.id}
                    className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50"
                    >
                      <img 
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 object-contain" 
                      />

                      <div className="flex-1 min-w-0">
                         <h3 className="font-semibold text-gray-800 truncate">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.category}
                      </p>
                      </div>

                      <button
                       onClick={() => handleRemove(item.id)}
                     className="shrink-0 rounded-md border border-red-200 px-3 py-1 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-700"
                      title={`Remove ${item.name}`}
                      aria-label={`Remove ${item.name}`}
                      >
                        Remove All
                      </button>

                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>
        </aside>

      </div>
    </section>
  )


}

export default Technologies;