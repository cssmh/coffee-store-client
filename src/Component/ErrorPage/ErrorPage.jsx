import error from "../../assets/404/404.gif";
import Navbar from "../Navbar/Navbar";
import BackHome from "../BackHome/BackHome";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackHome></BackHome>
      <img src={error} className="mx-auto" alt="" />
    </div>
  );
};

export default ErrorPage;
