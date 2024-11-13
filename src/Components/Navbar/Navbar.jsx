import React from "react";
import Headerlogo from "../../assets/images/header-logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";

export const Navbar = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={Headerlogo} alt="Logo" width={130} height={29} />
          </a>
        </nav>
      </header>
    </>
  );
};
