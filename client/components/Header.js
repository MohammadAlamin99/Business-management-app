"use client";
import Image from "next/image";
import userImg from "../assets/image/userimage.jpg";
const Header = () => {
  return (
    <div>
      <div className="main_header_container flex items-center justify-between">
        <div className="input_wrapper flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-[330px] py-3 px-5 border-1 focus:outline-0 border-[#353C56] rounded-[30px] text-[#9199AD]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-[-35px]"
          >
            <path
              d="M10.6454 11.3539C9.65937 12.1793 8.38936 12.6773 7.0047 12.6773C3.87336 12.6773 1.33203 10.1359 1.33203 7.00525C1.33203 3.87459 3.87336 1.33325 7.0047 1.33325C10.1347 1.33325 12.6767 3.87459 12.6767 7.00525C12.6767 8.39059 12.1787 9.66125 11.3534 10.6459L14.5194 13.8126C14.6167 13.9099 14.6654 14.0379 14.6654 14.1666C14.6654 14.5579 14.3074 14.6666 14.1654 14.6666C14.0374 14.6666 13.9094 14.6179 13.8114 14.5199L10.6454 11.3539ZM7.0047 2.33392C4.42603 2.33392 2.33336 4.42725 2.33336 7.00525C2.33336 9.58325 4.42603 11.6766 7.0047 11.6766C9.58203 11.6766 11.676 9.58325 11.676 7.00525C11.676 4.42725 9.58203 2.33392 7.0047 2.33392V2.33392Z"
              fill="#9199AD"
            />
          </svg>
        </div>
        <div className="user-wrapper flex items-center gap-[15px]">
          <Image
            src={userImg}
            className="user-avatar w-[45px] h-[45px] rounded-[50%] object-cover"
          />
          <div className="user-info pr-[30px] cursor-pointer">
            <span className="user-name popins-font text-[14px] text-[#F3F4F7] font-normal flex items-center gap-[15px]">
              Aiden Max
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.843 10.711C16.951 10.57 17 10.411 17 10.255C17 9.866 16.694 9.5 16.251 9.5H7.75C7.305 9.5 7 9.867 7 10.255C7 10.412 7.05 10.571 7.159 10.712C8.362 12.266 10.411 14.911 11.417 16.21C11.559 16.394 11.777 16.5 12.009 16.5C12.239 16.5 12.458 16.393 12.6 16.209C13.602 14.91 15.644 12.264 16.843 10.711Z"
                  fill="#F3F4F7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
