const steps = [
  {
    number: "1",
    title: "Open the chat",
    description:
      "No sign-up required. Click and start talking instantly.",
  },

  {
    number: "2",
    title: "Share how you feel",
    description:
      "Tell Mindora what is on your mind. Everything stays private.",
  },

  {
    number: "3",
    title: "Get support",
    description:
      "Receive compassionate guidance, coping strategies, and resources.",
  },
];

const StepsSection = () => {
  return (
    <section className="w-full py-28 border-t border-[#E5E5E5]">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-[700px]">

          <p className="text-sm text-[#666666] mb-6">
            How Mindora Works
          </p>

          <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.5px] text-[#111111]">

            Three simple steps to get the support you need.

          </h2>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#E5E5E5] rounded-[28px] p-8 min-h-[260px]"
            >

              {/* NUMBER */}
              <div className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center text-lg font-medium">

                {step.number}

              </div>

              {/* TITLE */}
              <h3 className="mt-10 text-2xl font-semibold text-[#111111]">

                {step.title}

              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-[#666666] leading-7">

                {step.description}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StepsSection;