import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  totalQuantity: number;
}

const Header: React.FC<HeaderProps> = ({ totalQuantity }) => {
  const location = useLocation();

  console.log("quantities",totalQuantity)
  const isActive = (path: string): string =>
    location.pathname === path ? "border-b-[3px] border-red-500" : "";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    // { path: "", label: "Cart" },
  ];

  return (
    <div className="flex justify-between items-center bg-slate-600 px-10 py-3">
      <div className="text-white font-bold text-lg">Logo</div>

      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.path} className={`${isActive(link.path)}`}>
              <Link
                className="font-medium text-white hover:text-red-500"
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative">
          <Link to="/cart">
            <ShoppingBagIcon className="h-6 w-6 text-white" />
            {totalQuantity > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full h-4 w-4 text-[10px] flex items-center justify-center">
                {totalQuantity}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
