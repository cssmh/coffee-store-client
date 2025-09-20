import coffee from "../../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] relative overflow-hidden"
      style={{
        backgroundImage: `url(${coffee})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

      {/* Animated coffee beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-amber-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-amber-700 rounded-full opacity-30 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-amber-800 rounded-full opacity-15 animate-pulse delay-500"></div>
      </div>

      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="px-4 md:px-0 max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-200 text-sm font-medium mb-4 border border-amber-400/30">
              ☕ Premium Coffee Experience
            </span>
          </div>

          <h1 className="mb-6 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold max-w-4xl mx-auto leading-tight text-white drop-shadow-2xl animate-slide-up">
            Would you like to have a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              delicious
            </span>
            <br className="hidden sm:block" />
            cup of coffee?
          </h1>

          <p className="mb-8 text-sm sm:text-base lg:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100 drop-shadow-lg animate-slide-up delay-200">
            Discover the perfect blend of taste and wellness. Our premium coffee
            selection offers not just incredible flavor, but also health
            benefits including reduced risk of type 2 diabetes and heart
            disease.
            <span className="hidden lg:inline">
              {" "}
              Start your day right with our carefully roasted beans.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
            <button className="btn bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-none px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <span>☕</span> Explore Our Coffee
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in delay-600">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-amber-400">
                25+
              </div>
              <div className="text-sm text-gray-300">Coffee Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-amber-400">
                1999
              </div>
              <div className="text-sm text-gray-300">Since Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-amber-400">
                100%
              </div>
              <div className="text-sm text-gray-300">Premium Quality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
