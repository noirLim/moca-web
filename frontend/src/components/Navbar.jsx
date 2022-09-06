import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0 ">
      <div className="md:flex items-center justify-evenly bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="cafe-outline" style={{ color: "#d39128" }} />
          </span>
          Moca
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 font-body cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="bg-coffee text-white  py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
           duration-500 font-body"
          >
            <Link to={"/products"} className="cursor-pointer">
              Products
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
