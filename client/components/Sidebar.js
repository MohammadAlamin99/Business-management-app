import Link from "next/link";
import { usePathname } from "next/navigation"; // Note: 'navigation' instead of 'router'
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="sidebar_wrapper py-3.5 px-6">
        <div className="sidebar_menu">
          <h4 className="text-sm py-2 pl-1.5 uppercase">General</h4>
          <ul>
            <li className="menu_item">
              <div className="menu_wrapper">
                <Link
                  href="/"
                  className={`flex items-center gap-2.5 pl-2.5 pt-3 pb-3 pr-2.5 text-base ${
                    pathname === "/" ? "navActive" : ""
                  }`}
                >
                  <GoHome className="w-5 h-5" />
                  Dashboards
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
            <li className="menu_item">
              <div className="menu_wrapper">
                <Link
                  href="/order"
                  className={`flex items-center gap-2.5 pl-2.5 pt-3 pb-3 pr-2.5 text-base ${
                    pathname === "/order" ? "navActive" : ""
                  }`}
                >
                  <PiShoppingCartLight className="w-5 h-5" />
                  Orders
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
          </ul>
          <h4 className="text-sm pt-4 pl-1.5 pb-2.5 uppercase">Application</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
