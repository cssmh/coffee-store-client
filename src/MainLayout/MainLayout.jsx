import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer/Footer";
import { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";

const MainLayout = () => {
  // Dynamic title
  const loc = useLocation();
  useEffect(() => {
    const path = loc.pathname.toUpperCase();
    if (path === "/") {
      document.title = "Coffee Master-Home";
    } else if (loc.state) {
      document.title = `${loc.state}`;
    } else {
      document.title = `Coffee${path.replace("/", "-")}`;
    }
  }, [loc.pathname, loc.state]);
  // Dynamic title End
  const navigationForSpinner = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[70vh]">
        {navigationForSpinner.state === "loading" ? (
          <div className="flex justify-center">
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
