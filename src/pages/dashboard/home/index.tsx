import BreadCrumb from "@components/dashboard/BreadCrumb";
import { FaRobot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoChatbubbleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <BreadCrumb
        title="Dashboard"
        breadcrumb={[{ title: "Home", href: "/dashboard", active: true }]}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Companies */}
        <Link
          to={"companies"}
          className="p-3 bg-white rounded-lg flex items-center gap-5 hover:shadow hover:shadow-violet-100"
        >
          <div className="w-14 h-14 bg-violet-800 bg-opacity-5 rounded-md flex items-center justify-center">
            <HiOfficeBuilding className="text-4xl text-violet-800" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Companies</h1>
            <p className="text-3xl font-semibold">30</p>
          </div>
        </Link>
        {/* bots */}
        <Link
          to={"bots"}
          className="p-3 bg-white rounded-lg flex items-center gap-5 hover:shadow hover:shadow-green-100"
        >
          <div className="w-14 h-14 bg-green-800 bg-opacity-5 rounded-md flex items-center justify-center">
            <FaRobot className="text-4xl text-green-800" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Bots</h1>
            <p className="text-3xl font-semibold">30</p>
          </div>
        </Link>
        {/* Messages */}
        <Link
          to={"messages"}
          className="p-3 bg-white rounded-lg flex items-center gap-5 hover:shadow hover:shadow-red-100"
        >
          <div className="w-14 h-14 bg-red-600 bg-opacity-5 rounded-md flex items-center justify-center">
            <IoChatbubbleSharp className="text-4xl text-red-600" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Messages</h1>
            <p className="text-3xl font-semibold">30</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Page;
