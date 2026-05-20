const resources = [
  {
    type: "Exercise",
    title: "5-4-3-2-1 Grounding Technique",
    description:
      "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
  },

  {
    type: "Article",
    title: "Understanding Panic Attacks",
    description:
      "Learn what happens during a panic attack and how to manage symptoms.",
  },

  {
    type: "Exercise",
    title: "Box Breathing Guide",
    description:
      "Inhale 4s hold 4s exhale 4s hold 4s. Repeat 4 times.",
  },

  {
    type: "Article",
    title: "Building a Support Network",
    description:
      "How to reach out and build meaningful connections with others.",
  },

  {
    type: "Exercise",
    title: "Step Outside",
    description:
      "Two minutes of fresh air can shift the moment.",
  },

  {
    type: "Article",
    title: "Sleep Hygiene Checklist",
    description:
      "Practical tips to improve your sleep quality tonight.",
  },
];

const SelfCareSection = () => {
  return (
    <section className="w-full py-28 border-t border-[#E5E5E5]">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-[700px]">

          <p className="text-sm text-[#666666] mb-6">
            Quick Self Care
          </p>

          <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.5px] text-[#111111]">

            Curated articles and exercises to help you navigate difficult moments.

          </h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-[28px] p-8 hover:shadow-sm transition"
            >

              {/* TYPE */}
              <p className="text-sm text-[#666666]">
                {item.type}
              </p>

              {/* TITLE */}
              <h3 className="mt-5 text-2xl font-semibold text-[#111111] leading-9">

                {item.title}

              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-[#666666] leading-7">

                {item.description}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SelfCareSection;