import { Link } from "react-router-dom";
import coffee from "../../assets/more/3.png";
import { motion } from "framer-motion"; // For animation

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${coffee})`,
      }}
    >
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Banner content */}
      <motion.div
        className="hero-content text-center text-neutral-content relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="mb-6 text-4xl md:text-5xl font-bold max-w-xl mx-auto text-white leading-snug">
          Would you like a <span className="text-yellow-400">delicious</span> <br />
          cup of coffee?
        </h1>
        
        <p className="mb-8 max-w-2xl mx-auto text-gray-200 text-lg md:text-xl leading-relaxed">
          Studies suggest that moderate coffee intake (2–5 cups/day) is linked to 
          a lower risk of several chronic diseases, including type 2 diabetes, heart 
          disease, and even depression.
        </p>
        
        {/* Call-to-action buttons */}
        <div className="space-x-4">
          <Link to="/users">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              Explore Users
            </motion.button>
          </Link>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
