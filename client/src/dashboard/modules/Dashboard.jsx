import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <Navbar />
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div>{/* <h1>Welcome to the Dashboard, {user.username}</h1> */}</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
