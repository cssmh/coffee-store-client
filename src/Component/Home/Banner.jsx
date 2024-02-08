import coffee from "../../assets/more/3.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${coffee})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-4 text-2xl font-bold max-w-lg mx-auto">
            Would you like to have a delicious<br></br> cup of coffee?
          </h1>
          <p className="mb-5 max-w-xl mx-auto">
            Hu said that moderate coffee intake—about 2–5 cups a day—is linked
            to a lower likelihood of type 2 diabetes, heart disease, liver and
            endometrial cancers, Parkinson's disease, and depression. It's even
            possible that people who drink coffee can reduce their risk of early
            death.
          </p>
          <button className="btn bg-coffee text-white border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
