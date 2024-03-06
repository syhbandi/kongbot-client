import { FiChevronDown, FiMenu, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import { useSidebarStore } from "zustand/sidebar";

const Navbar = () => {
  const { status, mobileStatus, setStatus, setMobileStatus } =
    useStore(useSidebarStore);
  return (
    <div className=" h-16 flex items-center px-5 bg-white">
      {/* menu desktop */}
      <button
        className="hidden lg:block text-xl"
        onClick={() => setStatus(!status)}
      >
        <FiMenu />
      </button>
      {/* menu mobile */}
      <button
        className="text-xl lg:hidden"
        onClick={() => setMobileStatus(!mobileStatus)}
      >
        <FiMenu />
      </button>
      <Link
        to={"/dashboard/profile"}
        className="flex items-center gap-2 ml-auto"
      >
        <div className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center">
          <span className="text-white text-xl">
            <FiUser />
          </span>
        </div>
        <FiChevronDown />
      </Link>
    </div>
  );
};

export default Navbar;
