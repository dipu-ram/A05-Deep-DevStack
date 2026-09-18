import devLogo from "../assets/logo-text.png";
function Footer() {
     return (
          <footer className="bg-white text-gray-700 py-10 mt-12 border-t border-gray-200">
               <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                         <div className="flex items-center gap-3 mb-3">
                              <img src={devLogo} alt="Dev Stack Logo" className="w-30 -h-30"/>
                              <span className="text-lg font-bold text-gray-900"></span>
                         </div>

                         <p className="Curated tools, technologies, and resources for developers."></p>
                         <div className="flex gap-3 mt-3">
                              <a href="#" className="hover:text-purple-600">GitHub</a>
                              <a href="#" className="hover:text-purple-600">Twitter</a>
                              <a href="#" className="hover:text-purple-600">LinkedIn</a>
                         </div>
                    </div>

                    <div>
                         <h3 className="font-semibold text-gray-900 mb-2">PRODUCT</h3>
                         <ul><li>Home</li><li>Technologies</li><li>Projects</li></ul>
                    </div>
                    <div>
                    <h3 className=" font-semibold text-gray-900 mb-2">COMPANY</h3>
                     <ul><li>About</li>Contact<li>Careers</li></ul>  
                     </div>           
                    <div>
                <h3 className=" font-semibold text-gray-900 mb-2">LEGAL</h3>
                  <li>Privacy Policy</li><li>Terms of Service</li>
                 </div>  
                 </div> 
                 
                 <div className="mt-8 border-t border-gray-200 pt-4 text-sm flex justify-start gap-200">
                     <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                     <div className="flex-start gap-5 mt-2 justify-content">
                         <a href="#" className="hover: text-600">Privacy</a>
                         <a href="#" className="hover: text-600">Terms</a>
                     </div>
                 </div>
          </footer>
     );
}

export default Footer;