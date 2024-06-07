import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Kiat from "../assets/coin.png"

const Header = () => {
  return (
    <>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
    <header>
     
       <div className="h-[50px] bg-slate-700"> </div>
      <div className="nav-area relative">
        <Link to="/" className="logo flex items-center relative container">
         <img className="w-[60px] mt-[14px]"  src={Kiat} alt /> <p style={{fontFamily:"Nunito,sans-serif"}}  className=" text-[30px] font-extrabold ml-[-10px]">Kait</p>
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
    </>
  
  );
};

export default Header;
