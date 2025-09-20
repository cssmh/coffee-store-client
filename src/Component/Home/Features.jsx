import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";

const Features = () => {
  const features = [
    {
      icon: icon1,
      title: "Awesome Aroma",
      description:
        "Experience the rich, captivating fragrance that awakens your senses with every cup",
    },
    {
      icon: icon2,
      title: "High Quality",
      description:
        "Premium beans sourced directly from the finest coffee farms around the world",
    },
    {
      icon: icon3,
      title: "Pure Grades",
      description:
        "100% pure, single-origin coffee beans with no artificial additives or preservatives",
    },
    {
      icon: icon4,
      title: "Proper Roasting",
      description:
        "Expertly roasted to perfection using traditional methods for optimal flavor extraction",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-20 h-20 bg-amber-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-amber-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Coffee?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our coffee exceptional through our commitment to
            quality and craftsmanship
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-amber-200/50"
            >
              {/* Icon container with hover effect */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <img
                    src={feature.icon}
                    className="w-12 h-12 filter brightness-0 invert"
                    alt={feature.title}
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-amber-300/40 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-amber-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 w-0 group-hover:w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="text-amber-600 text-2xl">☕</span>
            <span className="text-gray-700 font-medium">
              Crafted with passion since 1999
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
