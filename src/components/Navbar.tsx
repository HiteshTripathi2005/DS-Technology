// import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <nav className="bg-teal-800 text-white p-4 fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           className="text-2xl font-bold flex items-center space-x-2"
//         >
//           <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
//         </motion.div>
//         <div className="space-x-6">
//           <NavLink to="/" className="hover:text-teal-200 transition-colors">
//             Home
//           </NavLink>
//           <NavLink
//             to="/products"
//             className="hover:text-teal-200 transition-colors"
//           >
//             Products
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-teal-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold flex items-center space-x-2"
        >
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        </motion.div>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-200 text-white transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white  after:transition-all after:duration-300 ${
                isActive
                  ? "text-white after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-gray-200 text-white transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-white  after:transition-all after:duration-300 ${
                isActive
                  ? "text-white after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
