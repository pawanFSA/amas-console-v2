import React from "react";
import AuthButton from "../components/AuthButton";
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (session === null) {
    redirect("/");
  }

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-slate-200 flex flex-row justify-between">
        <h1>Welcome, {session?.user?.name}</h1>
        <AuthButton />
      </nav>
      <div className="flex flex-row w-full flex-grow ">
        <Sidebar />
        <div className="flex w-full h-full justify-center">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
