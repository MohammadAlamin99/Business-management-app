"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";

const page = () => {
  return (
    <div>
      <div className="Dashboard">
        <Sidebar />
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default page;
