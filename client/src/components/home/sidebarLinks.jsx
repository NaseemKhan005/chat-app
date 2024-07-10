import { BsChatDots } from "react-icons/bs";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { PiCirclesThree } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = () => {
  const { pathname } = useLocation();
  const activeClass =
    "relative before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:rounded-full hover:before:bg-primary hover:bg-primary/10 hover:text-primary";

  return (
    <div className="w-20 bg-gray-100 h-full flex-between flex-col py-5">
      <div className="flex items-center flex-col gap-2">
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" />
          <FiMenu className="size-5 ml-0.5 swap-off fill-current" />
          <IoCloseSharp className="size-6 swap-on fill-current" />
        </label>

        <Link to="/">
          <button
            className={`btn ${activeClass} ${
              pathname === "/" && "before:bg-primary bg-primary/10 text-primary"
            }`}
          >
            <BsChatDots className="size-5" />
          </button>
        </Link>

        <Link to="/status">
          <button
            className={`btn ${activeClass} ${
              pathname === "/chat" && "before:bg-primary"
            }`}
          >
            <PiCirclesThree className="size-[1.3rem]" />
          </button>
        </Link>
      </div>

      <div className="flex items-center flex-col gap-2">
        <button className="btn hover:bg-primary/10 hover:text-primary">
          <FiLogOut className="size-5 rotate-180" />
        </button>

        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          className="w-11 aspect-square cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};
export default SidebarLinks;
