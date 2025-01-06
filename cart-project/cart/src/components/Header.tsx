import { BeakerIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "border-b-[3px] border-red-500" : "";

  const navLinks = [
    {
      path: "/home",
      label: "Home",
    },
    {
      path: "/shop",
      label: "Shop",
    },
    {
      path: "/cart",
      label: "",
    },
  ];

  return (
    <div className="flex justify-between bg-slate-600 px-[40px] py-[10px]">
      <div>Logo</div>

      <div className="flex gap-5">
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li key={link.path} className={`${isActive(link.path)}`}>
              <Link className="font-medium" to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <div className="relative">
            <ShoppingBagIcon className="size-6 text-black-500" />
            <div className="absolute -top-2 bg-red-700 text-white rounded-full h-4 w-4  text-[10px] flex items-center justify-center">
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* {
        location.pathname === "/cart" ?
        <Link to="/">
        back
        </Link>
        :
        <Link to="/cart">
        Cart
        </Link>
       } */
}
