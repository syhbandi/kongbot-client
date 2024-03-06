import Footer from "@components/dashboard/Footer";
import Navbar from "@components/dashboard/Navbar";
import { SidebarLg, SidebarMobile } from "@components/dashboard/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { useStore } from "zustand";
import { useSidebarStore } from "zustand/sidebar";

const Dashboard = () => {
  const { status } = useStore(useSidebarStore);
  return (
    <div
      className={`flex min-h-screen bg-gray-100 transition-all ease-in-out duration-500 ${
        status ? "lg:pl-64" : ""
      }`}
    >
      <SidebarLg />
      <SidebarMobile />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-5">
          <Suspense fallback={<TopBarProgress />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
