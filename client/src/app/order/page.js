"use client";
import React from "react";
import Sidebar from "../../../components/Sidebar";
import Image from "next/image";
import userAvatar from "../../../assets/image/userAvatar.png"; // Assuming you have a user avatar image



const Page = () => {
  return (
    <div>
      <div className="Dashboard flex">
        <Sidebar />
        <div className="main-order-list mt-[50px] w-full bg-[#292F45] p-[30px] rounded-[20px]">
          <h4 className="ibm-font text-[20px] font-[500] text-[#F3F4F7] mb-[20px]">
            Data table records
          </h4>
          <p className="popins-font max-w-[590px] text-[14px] font-[400] text-[#9199AD] mb-[50px]">
            All the users that are registered on your store are displayed in data tables with some
            of their basic information and history.
          </p>

          {/* table */}
          <div className="overflow-x-auto bg-[#151D32] rounded-[20px]">
            <table className="w-full">
              <thead className="text-[#F3F4F7] border-b border-[#353C56]">
                <tr>
                  <th scope="col" className="ibm-font text-[16px] font-medium text-start px-[30px] py-[30px]">Customer</th>
                  <th scope="col" className="ibm-font text-[16px] font-medium text-start px-[30px] py-[30px]">Order ID</th>
                  <th scope="col" className="ibm-font text-[16px] font-medium text-start px-[30px] py-[30px]">Product</th>
                  <th scope="col" className="ibm-font text-[16px] font-medium text-start px-[30px] py-[30px]">Revenue</th>
                  <th scope="col" className="ibm-font text-[16px] font-medium text-start px-[30px] py-[30px]">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-data">
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">
                    <div className="userinfo flex items-center gap-[12px]">
                      <Image
                        src={userAvatar}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="User Avatar" />
                      <span className="popins-font text-[#F3F4F7]">Jane Smith</span>
                    </div>
                  </td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">John Doe</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">2023-10-01</td>
                  <td className="popins-font flex items-center gap-2.5 text-[14px] font-normal text-start px-[30px] py-[38px] text-[#9199AD]">
                    <div className="w-[12px] h-[12px] bg-[#27D095] rounded-[50%]"></div>
                    Shipped</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">$100.00</td>
                </tr>
                <tr className="table-data">
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">
                    <div className="userinfo flex items-center gap-[12px]">
                      <Image
                        src={userAvatar}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="User Avatar" />
                      <span className="popins-font text-[#F3F4F7]">Jane Smith</span>
                    </div>
                  </td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">John Doe</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">2023-10-01</td>
                  <td className="popins-font flex items-center gap-2.5 text-[14px] font-normal text-start px-[30px] py-[38px] text-[#9199AD]">
                    <div className="w-[12px] h-[12px] bg-[#27D095] rounded-[50%]"></div>
                    Shipped</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">$100.00</td>
                </tr>
                <tr className="table-data">
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">
                    <div className="userinfo flex items-center gap-[12px]">
                      <Image
                        src={userAvatar}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="User Avatar" />
                      <span className="popins-font text-[#F3F4F7]">Jane Smith</span>
                    </div>
                  </td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">John Doe</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">2023-10-01</td>
                  <td className="popins-font flex items-center gap-2.5 text-[14px] font-normal text-start px-[30px] py-[38px] text-[#9199AD]">
                    <div className="w-[12px] h-[12px] bg-[#27D095] rounded-[50%]"></div>
                    Shipped</td>
                  <td className="popins-font text-[14px] font-normal text-start px-[30px] py-[30px] text-[#9199AD]">$100.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
