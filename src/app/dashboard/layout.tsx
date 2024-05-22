import React from "react";
import AuthButton from "../components/AuthButton";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-slate-200">
        <AuthButton />
      </nav>
      <div className="flex flex-row w-full flex-grow">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
