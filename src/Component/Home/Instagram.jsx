import coffee1 from "../../assets/cups/Rectangle 10.png";
import coffee2 from "../../assets/cups/Rectangle 9.png";
import coffee3 from "../../assets/cups/Rectangle 11.png";
import coffee4 from "../../assets/cups/Rectangle 12.png";
import coffee5 from "../../assets/cups/Rectangle 13.png";
import coffee6 from "../../assets/cups/Rectangle 14.png";
import coffee7 from "../../assets/cups/Rectangle 16.png";
import coffee8 from "../../assets/cups/Rectangle 15.png";
import { Link } from "react-router-dom";
const Instagram = () => {
  return (
    <div className="my-7">
      <h1 className="text-2xl text-center font-semibold text-coffee">
        Follow on Instagram
      </h1>
      <div className="flex justify-center my-5 gap-1">
        <Link to={"/signUp"}>
          <button className="btn bg-coffee text-white">SignUp</button>
        </Link>
        <Link to={"/signIn"}>
          <button className="btn bg-coffee text-white">SignIn</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl mx-1 md:mx-auto gap-4">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        <img src={coffee5} alt="" />
        <img src={coffee6} alt="" />
        <img src={coffee7} alt="" />
        <img src={coffee8} alt="" />
      </div>
    </div>
  );
};

export default Instagram;
