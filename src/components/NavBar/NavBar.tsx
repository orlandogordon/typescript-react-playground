import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ViteLogo from "../../assets/vite-js-logo.png";

// type Props = {};

// const NavBar = (props: Props) => {
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className="fixed top-0 right-0 ">
      <div className="hidden lg:flex justify-between w-screen p-8 ">
        <Link to={"./"}>
          <img src={ViteLogo} alt="vite logo" className="h-12" />
        </Link>
        <ul className="hidden lg:flex gap-16 my-auto">
          <Link to={"./todo"}>
            <li>ToDo</li>
          </Link>
          <Link to={"./counter"}>
            <li>Counter</li>
          </Link>
          <Link to={"./profile"}>
            <li>Profile</li>
          </Link>
          <Link to={"./timer"}>
            <li>Timer</li>
          </Link>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "hidden"
            : "bg-slate-700 rounded-full p-3 mt-5 mr-5 lg:hidden"
        }
      >
        <button
          type="button"
          title="Mobile Navigation Menu Open"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu className="text-4xl lg:hidden" />
        </button>
      </div>
      <div
        className={
          menuOpen
            ? "w-screen h-screen bg-green-400 flex flex-col lg:hidden"
            : "hidden"
        }
      >
        <button
          type="button"
          title="Mobile Navigation Menu Close"
          onClick={() => setMenuOpen(!menuOpen)}
          className="mr-5 mt-5"
        >
          <AiOutlineClose className="text-5xl float-right " />
        </button>
        <ul className="gap-16 justify-self-end text-center items-center">
          <Link to={"./"}>
            <li>Home</li>
          </Link>
          <Link to={"./todo"}>
            <li>ToDo</li>
          </Link>
          <Link to={"./counter"}>
            <li>Counter</li>
          </Link>
          <Link to={"./profile"}>
            <li>Profile</li>
          </Link>
          <Link to={"./timer"}>
            <li>Timer</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
