import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Kiat from "../assets/coin.png"

const Header = () => {
  return (
    <header>
       <div className="h-[50px] bg-slate-700"> </div>
      <div className="nav-area">
        <Link to="/" className="logo flex items-center relative">
         <img className="w-[60px] mt-[14px]" src={Kiat} alt /> <p className="ml-[-10px]">Kait</p>
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
