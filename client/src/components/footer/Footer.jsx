import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="text-slate-900 shadow-lg border-t-2 font-Poppins bg-blackk border-t-blackk body-font">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl uppercase text-primary font-semibold">
              Creative Kitchen
            </span>
          </a>
          <p className="text-sm text-primary sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Creative Kitchen —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/">
              <FaGithub size={30} className="p-1 text-primary mx-auto mb-4" />
            </a>
            <a className="ml-3" href="/">
              <FaInstagram
                size={30}
                className="p-1 text-primary mx-auto mb-4"
              />
            </a>
            <a className="ml-3" href="/">
              <FaLinkedin size={30} className="p-1 text-primary mx-auto mb-4" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
