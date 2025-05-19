import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_wrapper py-3.5 px-6">
        <div className="sidebar_menu">
          <h4 className="text-sm py-2 pl-1.5 uppercase">General</h4>
          <ul>
            <li className="menu_item">
              <div className="menu_wrapper pl-2.5 pt-3 pb-3 pr-2.5">
                <Link href={"/"} className="flex items-center gap-2.5 text-base">
                  <GoHome className="w-5 h-5" />
                  Dashboards
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
            <li className="menu_item">
              <div className="menu_wrapper pl-2.5 pt-3 pb-3 pr-2.5">
                <Link href={"/"} className="flex items-center gap-2.5 text-base">
                  <HiOutlineShoppingBag className="w-5 h-5" />
                  Ecommerce
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
          </ul>
          <h4 className="text-sm pt-4 pl-1.5 pb-2.5 uppercase">Application</h4>
          <ul>
            <li className="menu_item">
              <div className="menu_wrapper pl-2.5 pt-3 pb-3 pr-2.5">
                <Link href={"/"} className="flex items-center gap-2.5 text-base">
                  <GoHome className="w-5 h-5" />
                  Dashboards
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
            <li className="menu_item">
              <div className="menu_wrapper pl-2.5 pt-3 pb-3 pr-2.5">
                <Link href={"/"} className="flex items-center gap-2.5 text-base">
                  <HiOutlineShoppingBag className="w-5 h-5" />
                  Ecommerce
                  <IoIosArrowForward className="ml-auto" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
