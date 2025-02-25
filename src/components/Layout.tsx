import React, { useState } from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full dark:bg-black  overflow-hidden cursor-default">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {!isMenuOpen && (<main className="flex-grow flex w-full h-full">{children}</main>)}
    </div>
  );
};

export default Layout;
