import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex items-center bg-black w-full px-[2.56rem]  md:px-20 lg:px-[7.5rem] pt-[3.75rem] justify-between ">
      <Link to={"/"}>
        <img src={logo} alt=" logo image" />
      </Link>
      <button className="text-white text-5xl">
        <BiMenuAltRight />
      </button>
    </nav>
  );
}

export default Navbar;
