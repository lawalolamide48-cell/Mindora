const Footer = () => {
  return (
    <footer className="w-full border-t border-[#E5E5E5]">

      {/* CTA SECTION */}
      <div className="py-28">

        <div className="max-w-[1280px] mx-auto px-6">

          <div className="max-w-[760px]">

            {/* SMALL TEXT */}
            <p className="text-sm text-[#666666] mb-6">
              Ready when you are.
            </p>

            {/* TITLE */}
            <h2 className="text-[56px] leading-[66px] font-semibold tracking-[-2px] text-[#111111]">

              No pressure. No commitment.
              Just a safe space to talk through
              whatever is on your mind.

            </h2>

            {/* BUTTON */}
            <button className="mt-10 bg-[#111111] text-white px-6 py-4 rounded-full text-sm font-medium hover:opacity-90 transition">

              Start Anonymous Chat

            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-[#E5E5E5]">

        <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex flex-wrap gap-6 text-sm text-[#666666]">

            <a href="#">About</a>

            <a href="#">How It Works</a>

            <a href="#">Resources</a>

            <a href="#">Privacy</a>

          </div>

          {/* RIGHT */}
          <div className="text-sm text-[#666666]">

            © 2026 Mindora. All rights reserved.

          </div>

        </div>

      </div>

      {/* FINAL TEXT */}
      <div className="pb-10">

        <div className="max-w-[1280px] mx-auto px-6">

          <p className="text-sm text-[#666666]">

            A safe space to talk. Anonymous by design.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;