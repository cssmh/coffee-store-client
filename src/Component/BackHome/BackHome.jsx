import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const BackHome = () => {
  return (
    <Link to={"/"}>
      <button className="mx-16 my-4 font-bold flex items-center gap-1">
        <FaArrowLeft />
        Back to Home
      </button>
    </Link>
  );
};

export default BackHome;