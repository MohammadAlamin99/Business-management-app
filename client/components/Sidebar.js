"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/image/Logo.png";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    home: false,
    ecommerce: false,
  });

  const pathname = usePathname();

  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])), // Close all menus active class
      [menuKey]: !prev[menuKey], 
    }));
  };

  // Check active routes
  const isDashboardActive = pathname === "/dashboard";
  const isOrdersActive = pathname === "/order";

  return (
    <div>
      <div className="Main-sidebar bg-[#292F45] w-[218px] h-[100vh] m-[30px] rounded-[20px] pl-[20px] pr-[20px] pt-[50px]">
        <Image
          src={logo}
          width={137}
          height={47}
          className="Main-logo pb-[50px]"
          alt="Logo"
        />
        <div className="Main-menu">
          <ul className="menu-list-wrapper">
            {/* Home Menu */}
            <li
              className={`list cursor-pointer mb-[10px] ${openMenus.home ? "active" : "" || isDashboardActive ? "active" : ""} rounded-[8px]`}
              onClick={() => toggleMenu("home")}
            >
              <div className="home ibm-font flex items-center gap-[10px] text-[#9199AD] text-[16px] font-[500] py-[12px] px-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clipPath="url(#clip0_503_3579)">
                    <path d="M15.75 9.75V17.25H11.25V12.75H6.75V17.25H2.25V9.75H0L9 0.75L18 9.75H15.75ZM15 5.31975V1.5H12.75V3.06975L15 5.31975Z" fill="" />
                  </g>
                  <defs>
                    <clipPath id="clip0_503_3579">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Home
                <svg className="arrow ml-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M0 4.27583L1.65025 2.625L7.00233 8.07275L12.3497 2.625L14 4.27583L7.00233 11.375L0 4.27583Z" fill="" />
                </svg>
              </div>
              <ul className={`sub-menu-list-wrapper ${openMenus.home ? "active" : "" || isDashboardActive ? "active" : ""} pt-[9px]`}>
                <li className="sub-list pb-[20px] pl-[38px]">
                  <Link
                    href="/dashboard"
                    className={`flex items-center gap-[10px] ${isDashboardActive ? "text-[#F3F4F7]" : "text-[#FFC794]"} text-[16px] font-[500]`}
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </li>

            {/* Ecommerce Menu */}
            <li
              className={`list cursor-pointer mb-[10px] ${openMenus.ecommerce ? "active" : "" || isOrdersActive ? "active" : ""} rounded-[8px]`}
              onClick={() => toggleMenu("ecommerce")}
            >
              <div className="home ibm-font flex items-center gap-[10px] text-[#9199AD] text-[16px] font-[500] py-[12px] px-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.4185 5.25L6.94425 1.7235C7.0935 1.575 7.28925 1.5 7.485 1.5C7.94475 1.5 8.25 1.87875 8.25 2.27175C8.25 2.45925 8.181 2.64975 8.02575 2.805L5.58075 5.25H3.4185ZM12.4193 5.25H14.5815L11.0557 1.7235C10.9065 1.575 10.7108 1.5 10.515 1.5C10.0553 1.5 9.75 1.87875 9.75 2.27175C9.75 2.45925 9.819 2.64975 9.97425 2.805L12.4193 5.25ZM0 6.75V8.25H0.48225C0.88275 8.25 1.248 8.478 1.42425 8.838L4.5 16.5H13.5L16.5765 8.8395C16.7512 8.47875 17.118 8.25 17.5185 8.25H18V6.75H0Z" fill="" />
                </svg>
                Ecommerce
                <svg className="arrow ml-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M0 4.27583L1.65025 2.625L7.00233 8.07275L12.3497 2.625L14 4.27583L7.00233 11.375L0 4.27583Z" fill="" />
                </svg>
              </div>
              <ul className={`sub-menu-list-wrapper ${openMenus.ecommerce ? "active" : "" || isOrdersActive ? "active" : ""} pt-[9px]`}>
                <li className="sub-list pb-[20px] pl-[38px]">
                  <Link
                    href="/order"
                    className={`flex items-center gap-[10px] ${isOrdersActive ? "text-[#F3F4F7]" : "text-[#FFC794]"} text-[16px] font-[500]`}
                  >
                    Order List
                  </Link>
                </li>
              </ul>
            </li>


            {/* Add more menus as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;