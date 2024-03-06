const Footer = () => {
  return (
    <div className="h-16 bg-white flex items-center px-5">
      <div className="ml-auto">
        &copy; {new Date().getFullYear()} Kongbot by{" "}
        <a
          rel=""
          href="https://misterkong.com"
          target="_blank"
          className="text-violet-800 font-medium"
        >
          Misterkong
        </a>
      </div>
    </div>
  );
};

export default Footer;
