"use client";
import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`home_page_wrapper flex`}>
        <div className={`Left_content  bg-white ${ isOpen?"active":""}`}>
          <Sidebar />
        </div>
        <div className={`Right_content ${ isOpen?"":"active_width"}`}>
          <div className="content_wrapper">
            <h1 className="text-2xl font-bold text-amber-300 pl-7 pt-7">Ecommers</h1>
            <p className="text-2xl font-bold text-amber-300 pl-7 pt-">Welcome to the Ecommers!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
