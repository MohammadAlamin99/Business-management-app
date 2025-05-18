import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <ul>
            <li className="menu_item">Dashboard</li>
            <li className="menu_item">Users</li>
            <li className="menu_item">Settings</li>
            <li className="menu_item">Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
