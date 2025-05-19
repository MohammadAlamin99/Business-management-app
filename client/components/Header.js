"use client";
import Image from "next/image";
import logo from "../assests/image/logo1.png";
import profile from "../assests/image/profile.png";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div className="Header_wrapper flex items-center justify-between bg-white">
        <div className="Header_logo flex items-center justify-between">
          <Image src={logo} alt="Logo" width={122} height={40} />
          <div className="icon_wrapper flex items-center justify-center w-9 h-9 cursor-pointer">
            <RxDashboard />
          </div>
        </div>
        <div className="Header_profile flex items-center justify-end gap-2.5">
          <div className="profile_wrapper cursor-pointer">
            <Image src={profile} alt="Profile" width={38} height={38} />
          </div>
          <div className="profile_name">
            <h4 className="text-sm text-gray-950">Ava Davis</h4>
            <div className="admin_wrapper flex items-center">
              <h5 className="text-xs text-current">Admin</h5>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
