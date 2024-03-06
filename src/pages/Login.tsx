import { FaRobot, FaWhatsapp } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-5">
      <div className="flex items-center gap-2 mb-10">
        <FaRobot className="text-5xl text-violet-800 -mt-1" />
        <span className="text-4xl font-bold text-violet-800">KONGBOT</span>
      </div>
      <div className="rounded-lg bg-white p-10 w-full lg:w-96">
        <h1 className="text-2xl font-bold mb-3">Log in</h1>
        <p className=" text-gray-500">
          Masukkan No. WhatsApp anda dan login ke Dashboard
        </p>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="h-12 border border-gray-300 rounded-lg flex items-center gap-3 focus-within:border-violet-800 focus-within:ring-1 focus-within:ring-violet-800 px-3 flex-row-reverse mb-5">
            <input
              type="text"
              name="wa"
              className="outline-none peer flex-1"
              placeholder="No. WhatsApp"
              autoFocus
            />
            <FaWhatsapp className="peer-focus:text-violet-800 text-gray-300 text-xl" />
          </div>
          <div className="h-12 border border-gray-300 rounded-lg flex items-center gap-3 focus-within:border-violet-800 focus-within:ring-1 focus-within:ring-violet-800 px-3 flex-row-reverse mb-5">
            <input
              type="password"
              name="password"
              className="outline-none peer flex-1"
              placeholder="Password"
            />
            <MdLock className="peer-focus:text-violet-800 text-gray-300 text-xl" />
          </div>
          <button className="h-12 bg-violet-800 flex items-center justify-center w-full rounded-lg text-white font-semibold border border-violet-800 hover:brightness-90">
            Login
          </button>
        </form>
        <div className="text-center mt-5 text-gray-500">
          Belum punya akun?{" "}
          <Link to={"/register"} className="font-semibold text-violet-800">
            Mendaftar
          </Link>
        </div>
      </div>
      <div className="mt-10">
        &copy; {new Date().getFullYear()} KONGBOT by{" "}
        <a
          href="https://misterkong.com"
          rel="misterkong"
          target="_blank"
          className="text-violet-800 font-semibold"
        >
          Misterkong
        </a>
      </div>
    </div>
  );
};

export default Login;
