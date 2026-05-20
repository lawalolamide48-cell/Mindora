const Navbar = () => {
  return (
    <header className="w-full border-b border-[#E5E5E5]">

      <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-semibold text-[#111111]">
          Mindora
        </h1>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#666666]">

          <a
            href="#"
            className="hover:text-black transition"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-black transition"
          >
            How It Works
          </a>

          <a
            href="#"
            className="hover:text-black transition"
          >
            Resources
          </a>

          <a
            href="#"
            className="hover:text-black transition"
          >
            Privacy
          </a>

        </nav>

        {/* BUTTON */}
        <button className="bg-[#111111] text-white px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">

          Start Chatting

        </button>

      </div>

    </header>
  );
};

export default Navbar;