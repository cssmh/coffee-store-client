import photo from "../../assets/more/logo1.png";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-[#4f2516]">
      <img src={photo} className="w-12" alt="" />
      <h1 className="text-2xl text-white">Coffee Master</h1>
    </div>
  );
};

export default Navbar;
