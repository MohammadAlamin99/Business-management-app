"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assests/image/Logo.png";

const Sidebar = () => {
  const [activeList, setActiveList] = useState(true);
  const pathname = usePathname();

  const handleListClick = () => {
    setActiveList(!activeList);
  };

  // Determine active sub-item based on current route
  const isDashboardActive = pathname === "/dashboard";
  const isSalesActive = pathname === "/sales";

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
            <li className={`list cursor-pointer ${activeList ? "active" : ""} rounded-[8px]`} onClick={handleListClick}>
              <div className="home ibm-font flex items-center gap-[10px] text-[#9199AD] text-[16px] font-[500] py-[12px] px-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15.7486 6.37354H2.25161C1.82486 6.37354 1.50086 6.72153 1.50086 7.12278C1.50086 7.21128 1.42211 6.68629 2.77136 15.117C2.82911 15.4815 3.14336 15.7485 3.51236 15.7485H14.4886C14.8576 15.7485 15.1719 15.4815 15.2296 15.117C16.5804 6.67954 16.4994 7.21204 16.4994 7.12204C16.4994 6.70354 16.1574 6.37354 15.7486 6.37354ZM15.0256 4.11079H3.00311C2.61011 4.11079 2.25236 4.42729 2.25236 4.86604C2.25236 4.92679 2.24486 4.87804 2.35736 5.62354H15.6714C15.7854 4.86454 15.7756 4.92529 15.7756 4.86679C15.7756 4.43179 15.4239 4.11079 15.0256 4.11079ZM3.04586 3.36079H14.9829C15.0264 3.03379 15.0241 3.04129 15.0241 2.99929C15.0241 2.49604 14.5929 2.24854 14.2734 2.24854H3.75536C3.35336 2.24854 3.00461 2.57329 3.00461 2.99854C3.00461 3.04054 3.00161 3.03079 3.04586 3.36079Z" fill="" />
                </svg>
                Home
                <svg className="arrow ml-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M0 4.27583L1.65025 2.625L7.00233 8.07275L12.3497 2.625L14 4.27583L7.00233 11.375L0 4.27583Z" fill="" />
                </svg>
              </div>
              <ul className={`sub-menu-list-wrapper ${activeList ? "active" : ""} pt-[9px]`}>
                <li className="sub-list pb-[20px] pl-[38px]">
                  <Link
                    href="/dashboard"
                    className={`flex items-center gap-[10px] ${isDashboardActive ? "text-[#F3F4F7]" : "text-[#FFC794]"} text-[16px] font-[500]`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="sub-list pb-[20px] pl-[38px]">
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;