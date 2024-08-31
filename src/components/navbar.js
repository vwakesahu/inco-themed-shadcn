import React from "react";
import MainNav from "./nav/main-nav";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  return (
    <header className="backdrop-blur-sm bg-backgroundOpac top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between sm:justify-between sm:space-x-0">
        <div className="hidden md:flex">
          <MainNav items={siteConfig.mainNav} isVisible={true} />
        </div>
        <div className="md:hidden">
          <MainNav items={siteConfig.mainNav} isVisible={false} />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <div className="md:flex hidden">
              <NavAlert />
            </div> */}
            {/* <ThemeToggle /> */}
            {/* <div className="md:hidden">
                <MobileNav />
              </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
