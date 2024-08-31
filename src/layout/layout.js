"use client";
import LeftSidebar from "@/components/left-sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full gap-4 flex">
      <div className="">
        <LeftSidebar />
      </div>
      <div className="w-full bg-blue-500">{children}</div>
      <div className="w-full max-w-[360px]">ssd</div>
    </div>
  );
};

export default MainLayout;
