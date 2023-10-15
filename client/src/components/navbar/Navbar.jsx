import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MdOutlineKitchen } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 shadow-lg bg-blackk mb-2 z-10">
      <div className="text-ungu  flex justify-between items-center h-20 max-w-[1240px] mx-auto  ">
        <a
          className="ml-3 text-2xl text-primary font-bold cursor-pointer uppercase"
          href="/"
        >
          Creative Kitchen
        </a>
        <nav className="hidden  uppercase md:flex">
          <span className="p-4 cursor-pointer text-primary font-bold hover:text-slate-900 ease-in-out duration-300">
            <a href={`/`}>Home</a>
          </span>
          <span className="p-4 cursor-pointer text-primary font-bold hover:text-slate-900 ease-in-out duration-300">
            <a href={`/browseproducts/`}>Browse Recipe</a>
          </span>
        </nav>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose
              size={30}
              className="cursor-pointer mr-6 text-ungu"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer mr-6 text-ungu"
            />
          )}
          <div
            className={
              !nav
                ? "fixed left-0 top-0 border-r border-r-ungu  w-[60%] h-full bg-primary ease-in-out duration-500"
                : "fixed left-[-100%] "
            }
          >
            <MdOutlineKitchen size={50} className="p-1 text-ungu mt-4 ml-4" />
            <ul className="uppercase md:hidden bg-primary">
              <li className="p-4 border-b border-ungu cursor-pointer text-black hover:text-slate-900 ease-in-out duration-300">
                <a href={`/`}>Home</a>
              </li>
              <li className="p-4 border-b border-ungu cursor-pointer text-black hover:text-slate-900 ease-in-out duration-300">
                <a href={`/browseproducts/`}>Browse Products</a>
              </li>
              <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-slate-700 hover:translate-x-2 duration-500 ease-in-out rounded text-base mt-4 md:mt-0">
                <AiOutlineShoppingCart size={30} />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
