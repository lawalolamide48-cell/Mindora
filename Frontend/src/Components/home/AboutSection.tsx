const AboutSection = () => {
  return (
    <section className="w-full py-28 border-t border-[#E5E5E5]">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* SECTION TITLE */}
        <p className="text-sm text-[#666666] mb-6">
          About Mindora
        </p>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <h2 className="text-[48px] leading-[58px] font-semibold text-[#111111] tracking-[-1.5px]">

              A safe, calm, and judgment-free space to talk.

            </h2>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-lg leading-8 text-[#666666]">

              Mindora is an AI-powered anonymous support platform
              designed to provide users with a safe, calm,
              and judgment-free space to talk about emotional,
              mental, and personal health concerns.

            </p>

            <p className="mt-6 text-lg leading-8 text-[#666666]">

              The platform combines conversational AI with
              supportive wellness resources to help users
              feel heard, supported, and guided whenever
              they need someone to talk to.

            </p>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <div className="border border-[#E5E5E5] rounded-full px-5 py-3 text-sm">
                Privacy
              </div>

              <div className="border border-[#E5E5E5] rounded-full px-5 py-3 text-sm">
                Accessibility
              </div>

              <div className="border border-[#E5E5E5] rounded-full px-5 py-3 text-sm">
                Emotional Support
              </div>

              <div className="border border-[#E5E5E5] rounded-full px-5 py-3 text-sm">
                Safe AI Conversations
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;