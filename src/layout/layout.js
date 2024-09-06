"use client";
import LeftSidebar from "@/components/left-sidebar";
import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex-shrink-0 overflow-y-auto overflow-x-hidden">
          <LeftSidebar />
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
        <div className="w-64 flex-shrink-0 overflow-y-auto overflow-x-hidden">
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;