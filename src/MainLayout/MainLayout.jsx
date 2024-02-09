import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
