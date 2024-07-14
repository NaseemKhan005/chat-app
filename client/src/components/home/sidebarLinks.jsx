/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { PiCirclesThree } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();
  const activeClass =
    "relative before:absolute before:top-0 before:left-0 before:w-[2.5px] before:h-full before:rounded-full hover:before:bg-primary hover:bg-primary/10 hover:text-primary";

  return (
    <div
      className={`bg-gray-100 z-20 fixed top-0 left-0 h-dvh py-5 transition-all overflow-hidden ${
        showSidebar
          ? "w-72 bg-gray-100 flex flex-col items-start justify-between"
          : "w-16 lg:w-20 flex-between flex-col"
      }`}
    >
      <div
        className={`flex flex-col gap-2 w-full px-1 lg:px-2 ${
          showSidebar ? "items-start" : "items-center"
        }`}
      >
        <label className="btn swap swap-rotate px-3">
          <input onClick={() => setShowSidebar(!showSidebar)} type="checkbox" />
          <FiMenu className="size-5 ml-0.5 swap-off fill-current" />
          <IoCloseSharp className="size-6 swap-on fill-current" />
        </label>

        <Link to="/" className="!w-full block">
          <button
            className={`btn w-full ${activeClass} ${
              pathname === "/" && "before:bg-primary bg-primary/10 text-primary"
            }
            ${
              showSidebar
                ? "flex items-center justify-normal gap-3"
                : "flex-center"
            }
            `}
          >
            <BsChatDots className="size-5" />
            {showSidebar && <p>Chats</p>}
          </button>
        </Link>

        <Link to="/status" className="!w-full block">
          <button
            className={`btn w-full ${activeClass} ${
              pathname === "/status" && "before:bg-primary bg-primary/10 text-primary"
            }
            ${
              showSidebar
                ? "flex items-center justify-normal gap-3"
                : "flex-center"
            }
            `}
          >
            <PiCirclesThree className="size-[1.4rem] stroke-2" />
            {showSidebar && <p>Status</p>}
          </button>
        </Link>
      </div>

      <div
        className={`flex flex-col gap-2 w-full ${
          showSidebar ? "items-start" : "items-center"
        }`}
      >
        <div className="px-1 lg:px-2 w-full">
          <button
            className={`btn w-full hover:bg-primary/10 hover:text-primary ${
              showSidebar
                ? "flex items-center justify-normal gap-3"
                : "flex-center"
            }`}
          >
            <FiLogOut className="size-5 rotate-180" />
            {showSidebar && <p>Logout</p>}
          </button>
        </div>

        <div
          className={`hover:bg-primary/10 w-full ${
            showSidebar
              ? "flex items-center cursor-pointer gap-3 pl-2 py-2"
              : "flex-center py-2"
          }`}
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="w-11 aspect-square cursor-pointer rounded-full"
          />
          {showSidebar && <p className="font-medium">Profile</p>}
        </div>
      </div>
    </div>
  );
};
export default SidebarLinks;
