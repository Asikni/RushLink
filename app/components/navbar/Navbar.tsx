"use client";

import { NavBarData } from "@/app/utils/constants";
import "@/app/navbar.css";
import "@/app/headings.css";
import "@/app/footer.css";
import { useState } from "react";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <nav>
      <div className="navBar">
        <div className="sidebar" onClick={toggleSidebar}></div>
        <div className={`navBarLinkMobile ${isSidebarOpen ? "open" : ""}`}>
          {NavBarData.map((data, index) => (
            <div key={index} onClick={toggleSidebar}>
              {data.title}
            </div>
          ))}
          <span
            onClick={() => {
              setIsSidebarOpen(false);
              console.log("clicked");
            }}
            className="close-btn"
          >
            &times;
          </span>
        </div>
        <div className="rushLinkLogo"></div>
        <div className="darkLightMode"></div>
        <div className="navBarLinks">
          <div className="navBarLink">
            {NavBarData.map((data, index) => (
              <div key={index}>{data.title}</div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
