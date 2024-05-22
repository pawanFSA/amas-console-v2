import React from "react";
import AuthButton from "../components/AuthButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-slate-200">
        <AuthButton />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
