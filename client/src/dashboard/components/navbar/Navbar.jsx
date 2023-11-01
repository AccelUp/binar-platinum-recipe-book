import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaBookJournalWhills } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/authAction";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const dispatch = useDispatch();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 shadow-lg bg-black z-10">
      <div className="text-primary flex justify-between items-center h-20 max-w-[1240px] mx-auto  ">
        <a
          className="ml-3 text-2xl text-primary font-bold cursor-pointer uppercase"
          href="/dashboard"
        >
          Creative Kitchen
        </a>
        <nav className="hidden  uppercase md:flex">
          <span className="p-4 cursor-pointer text-primary font-bold hover:text-whitee ease-in-out duration-300">
            <a href={`/profile`}>Profile</a>
          </span>

          <span className="p-4 cursor-pointer text-primary font-bold hover:text-whitee ease-in-out duration-300">
            {/* <a href={`/browserecipe`}>Browse Recipe</a> */}
          </span>
          <span className="p-4 cursor-pointer text-primary font-bold hover:text-whitee ease-in-out duration-300">
            <a onClick={handleLogout} href={`/`}>
              Logout
            </a>
          </span>
        </nav>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose
              size={30}
              className="cursor-pointer mr-6 text-primary"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer mr-6 text-primary"
            />
          )}
          <div
            className={
              !nav
                ? "fixed left-0 top-0 border-r border-r-ungu  w-[60%] h-full bg-primary ease-in-out duration-500"
                : "fixed left-[-100%] "
            }
          >
            <FaBookJournalWhills
              size={50}
              className="p-1 text-blackk mt-4 ml-4"
            />
            <ul className="uppercase md:hidden bg-primary">
              <li className="p-4 border-b border-blackk cursor-pointer text-black hover:text-slate-900 ease-in-out duration-300">
                <a href={`/profile`}>Profile</a>
              </li>
              {/* <li className="p-4 border-b border-blackk cursor-pointer text-black hover:text-slate-900 ease-in-out duration-300">
                <a href={`/browserecipe`}>Browse Recipe</a>
              </li> */}
              <li className="p-4 border-b border-blackk cursor-pointer text-black hover:text-slate-900 ease-in-out duration-300">
                <a onClick={handleLogout} href={`/`}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
