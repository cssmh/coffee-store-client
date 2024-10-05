import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-9 py-7 mb-5 bg-[#d7beaa]">
      <div className="text-center">
        <img src={icon1} className="mx-auto" alt="" />
        <h1 className="text-coffee text-xl font-semibold">Awesome Aroma</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div className="text-center">
        <img src={icon2} className="mx-auto" alt="" />
        <h1 className="text-coffee text-xl font-semibold">High Quality</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div className="text-center">
        <img src={icon3} className="mx-auto" alt="" />
        <h1 className="text-coffee text-xl font-semibold">Pure Grades</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div className="text-center">
        <img src={icon4} className="mx-auto" alt="" />
        <h1 className="text-coffee text-xl font-semibold">Proper Roasting</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
    </div>
  );
};

export default Features;
