"use client";
import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const page = () => {
  return (
    <div>
      <Header />
      <div className="home_page_wrapper flex">
        <div className="Left_content">
          <Sidebar />
        </div>
        <div className="Right_content">
          <div className="content_wrapper">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome to the dashboard!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
