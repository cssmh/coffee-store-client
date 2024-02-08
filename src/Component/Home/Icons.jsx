import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";
const Icons = () => {
  return (
    <div className="flex justify-center gap-4 py-7 mb-5 bg-[#d7beaa]">
      <div>
        <img src={icon1} alt="" />
        <h1 className="text-coffee text-xl font-semibold">Awesome Aroma</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div>
        <img src={icon2} alt="" />
        <h1 className="text-coffee text-xl font-semibold">High Quality</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div>
        <img src={icon3} alt="" />
        <h1 className="text-coffee text-xl font-semibold">Pure Grades</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
      <div>
        <img src={icon4} alt="" />
        <h1 className="text-coffee text-xl font-semibold">Proper Roasting</h1>
        <p>You will be a fan of aroma for sure</p>
      </div>
    </div>
  );
};

export default Icons;
