import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white px-[2.56rem]  md:px-20 lg:px-[7.5rem] py-28 md:py-40 grid gap-y-[3.75rem] justify-center md:grid-cols-2">
      <ul className="flex gap-[1.88rem]">
        <li className="font-roboto font-bold uppercase">
          <Link to={"/projects"}>projects</Link>
        </li>
        <li className="font-roboto font-bold uppercase">
          <Link to={"/about"}>about</Link>
        </li>
        <li className="font-roboto font-bold uppercase">
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
      <div className="flex gap-12 md:justify-between">
        <p className="font-roboto font-bold md:-order-2">yourmail@gmail.com</p>
        <img src={logo} alt=" logo image" className="-order-1" />
      </div>
    </footer>
  );
}

export default Footer;
