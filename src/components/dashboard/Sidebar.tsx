import { FaRobot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useStore } from "zustand";
import { useSidebarStore } from "zustand/sidebar";
import sidebarMenus from "constanst/sidebarMenus";
import { MdClose } from "react-icons/md";

export const SidebarLg = () => {
  const { status } = useStore(useSidebarStore);
  return (
    <div
      className={`hidden lg:flex flex-col w-64 h-screen bg-white fixed left-0 top-0 transition-all ease-in-out duration-500 ${
        status ? "" : "lg:-ml-64"
      }`}
      id="sidebar"
    >
      <Sidebar />
    </div>
  );
};

export const SidebarMobile = () => {
  const { mobileStatus } = useStore(useSidebarStore);
  return (
    <div
      className={`flex lg:hidden flex-col w-full h-screen bg-white fixed left-0 top-0 transition-all ease-in-out duration-500 ${
        mobileStatus ? "" : "-ml-[100%]"
      }`}
      id="sidebar"
    >
      <Sidebar />
    </div>
  );
};

const Sidebar = () => {
  const { mobileStatus, setMobileStatus } = useStore(useSidebarStore);
  return (
    <>
      <div className="h-16 px-10 flex items-center bg-white border-b border-gray-100 lg:justify-center">
        <div className="text-2xl mr-3 text-violet-800 -mt-1">
          <FaRobot />
        </div>
        <h1 className="text-xl font-bold text-violet-800">KONGBOT</h1>
        <button
          className="ml-auto text-xl lg:hidden"
          onClick={() => setMobileStatus(!mobileStatus)}
        >
          <MdClose />
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <ul className="mt-5">
          {sidebarMenus.map((menu, index) => (
            <li key={index}>
              <NavLink
                to={menu.path}
                className={
                  "flex items-center gap-5 h-14 px-10 text-gray-400 hover:text-violet-800"
                }
                end={menu.end}
                onClick={() => setMobileStatus(false)}
              >
                <span className="text-xl">{menu.icon}</span>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink
        to={"/logout"}
        className={
          "flex items-center gap-5 h-16 px-10 text-gray-400 hover:text-violet-800"
        }
      >
        <FiLogOut />
        Logout
      </NavLink>
    </>
  );
};
