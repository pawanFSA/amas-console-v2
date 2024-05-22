import React from "react";
import AuthButton from "../components/AuthButton";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-slate-200">
        <AuthButton />
      </nav>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
