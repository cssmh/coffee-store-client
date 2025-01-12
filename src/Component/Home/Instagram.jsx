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
    <div className="my-7 p-5 bg-[#f9f9f9] rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-semibold text-coffee">
        Be a Member first
      </h1>
      <div className="flex justify-center my-5 gap-3">
        <Link to={"/signUp"}>
          <button className="btn bg-coffee text-white rounded-lg px-4 py-2 hover:bg-coffee-dark transition duration-300">
            Sign Up
          </button>
        </Link>
        <Link to={"/signIn"}>
          <button className="btn bg-coffee text-white rounded-lg px-4 py-2 hover:bg-coffee-dark transition duration-300">
            Sign In
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-4">
        <img
          src={coffee1}
          alt="Coffee cup 1"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee2}
          alt="Coffee cup 2"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee3}
          alt="Coffee cup 3"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee4}
          alt="Coffee cup 4"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee5}
          alt="Coffee cup 5"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee6}
          alt="Coffee cup 6"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee7}
          alt="Coffee cup 7"
          className="w-full h-auto rounded-lg"
        />
        <img
          src={coffee8}
          alt="Coffee cup 8"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Instagram;
