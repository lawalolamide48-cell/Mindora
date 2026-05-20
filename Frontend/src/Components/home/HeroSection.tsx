const HeroSection = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="max-w-[760px]">

          <p className="text-sm text-[#666666] mb-6">
            Available 24/7
          </p>

          <h1 className="text-[64px] leading-[74px] font-semibold text-[#111111] tracking-[-2px]">
            Safe support whenever you need someone to talk to.
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#666666] max-w-[620px]">
            Chat anonymously with Mindora for guidance,
            emotional support, and health-related conversations —
            without judgment, without sign-ups.
          </p>

          <button className="mt-10 bg-[#111111] text-white px-6 py-4 rounded-full text-sm font-medium">
            Start Anonymous Chat
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;