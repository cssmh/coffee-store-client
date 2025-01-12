import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";

const MainLayout = () => {
  const loc = useLocation();
  useEffect(() => {
    const path = loc.pathname.toUpperCase();
    if (path === "/") {
      document.title = "Coffee Master | Home";
    } else if (loc.state) {
      document.title = `${loc.state}`;
    } else {
      document.title = `Coffee${path.replace("/", " | ")}`;
    }
  }, [loc.pathname, loc.state]);
  const navigationForSpinner = useNavigation();

  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        {navigationForSpinner.state === "loading" ? (
          <div className="flex justify-center">
            <FallingLines
              color="#4fa94d"
              width="62"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
