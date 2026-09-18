import logo from '../assets/logo-text.png'; 
function Navbar() {
  return (
   <nav className="container mx-auto flex justify-between items-center p-4 shadow bg-white">
       <div className="flex items-center gap-2">
        <button className="hamburger-btn text-2xl">
          &#9776;
         </button>
        <img src={logo} alt="Dev Stack" className="h-10 w-auto" />
        <span className="font-bold text-2xl text-purple-600"> </span>
      </div>
      
      <ul className="flex gap-6 font-medium">
        {["Home","Technologies","Projects","About","Contact"].map((item) => (
          <li key={item} 
          className={`cursor-pointer transition-colors ${
            item === "Home"
            ? "text-pink-600 font-semibold"
            : "text-gray-700 hover:text-orange-500"
          }`}
           >{item}</li>
        ))}
      </ul>
      

      <div className="flex gap-4">
        <button className='px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300'>
          sign In
          </button>
          <button className="px-4 py-2 rounded bg-linear-to-r from-orange-400 to-purple-500 text-white hover:opacity-90">
          Sign Up
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
