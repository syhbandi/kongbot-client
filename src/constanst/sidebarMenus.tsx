import { BiSolidDashboard } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
const sidebarMenus = [
  {
    name: "Dashboard",
    icon: <BiSolidDashboard />,
    path: "/dashboard",
    end: true,
  },
  {
    name: "Companies",
    icon: <HiOfficeBuilding />,
    path: "/dashboard/companies",
  },
  {
    name: "Bots",
    icon: <FaRobot />,
    path: "/dashboard/bots",
  },
  {
    name: "Messages",
    icon: <IoChatbubbleSharp />,
    path: "/dashboard/messages",
  },
];

export default sidebarMenus;
