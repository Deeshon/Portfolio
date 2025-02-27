import React, { useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  console.log('pathname', location.pathname)

  return (
    <div className="flex flex-col h-full w-full dark:bg-black cursor-default">
      {location?.pathname !== '/project' && (<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)}
      {location?.pathname === '/project' && isMenuOpen && (<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)}
      {location?.pathname === '/project' && !isMenuOpen && (<ProjectHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)}
      {!isMenuOpen && (<main className="flex-grow flex w-full h-full">{children}</main>)}
    </div>
  );
};

export default Layout;
