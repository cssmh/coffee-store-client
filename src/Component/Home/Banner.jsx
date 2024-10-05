import { Link } from "react-router-dom";
import coffee from "../../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]"
      style={{
        backgroundImage: `url(${coffee})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay bg-opacity-60"></div>
      
      {/* Banner Content */}
      <div className="hero-content text-center text-neutral-content">
        <div className="px-4 md:px-0">
          {/* Heading */}
          <h1 className="mb-4 text-xl sm:text-2xl lg:text-4xl font-bold max-w-lg mx-auto leading-tight">
            Would you like to have a delicious <br className="hidden sm:block" /> cup of coffee?
          </h1>

          {/* Description */}
          <p className="mb-5 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            It’s said that moderate coffee intake—about 2–5 cups a day—can lower the likelihood of type 2 diabetes, heart disease, liver cancers, and more. Enjoy a cup today!
          </p>

          {/* Button */}
          <Link to={"/users"}>
            <button className="btn bg-coffee text-white border-none px-4 py-2 transition-all duration-300 ease-in-out">
              Users
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
