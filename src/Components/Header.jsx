import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="fixed z-50 bg-primary flex justify-center items-center w-screen h-[110px] border-b-2 border-black">
      <div className="h-full w-11/12 flex justify-between">
        <div className="flex items-center h-full">
          <Link to="/" className="h-full">
            <button className="flex items-center h-full">
              <img src={logo} alt="Maan logo" className="h-1/2 mr-3" />
              <p className="mySerif text-accent font-semibold title2">
                Maan Restaurant
              </p>
            </button>
          </Link>
        </div>
        <div className="flex justify-end items-center w-5/12 font-mySans font-normal title3">
          <div className="flex justify-evenly items-center w-3/4 -mr-10">
            <div className="w-30 h-12 flex justify-center items-center">
              <Link to="/menu">
                <button className="linkUnderline">Menu</button>
              </Link>
            </div>
            <div className="w-30 h-12 flex justify-center items-center">
              <Link to="/location">
                <button className="linkUnderline">Locations</button>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/reservation">
              <button className="w-48 h-12 accentButton">Reservation</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
