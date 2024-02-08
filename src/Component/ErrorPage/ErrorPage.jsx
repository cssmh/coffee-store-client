import { Link } from "react-router-dom";
import error from "../../assets/404/404.gif";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Link to={"/"}>
        <button className="mx-16 mt-4 font-bold flex items-center gap-1">
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
      <img src={error} className="mx-auto" alt="" />
    </div>
  );
};

export default ErrorPage;
