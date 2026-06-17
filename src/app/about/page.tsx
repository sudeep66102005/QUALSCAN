import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export const metadata: Metadata = {
  title: "About Qualscan | Our Vision, Expertise & Journey",
  description:
    "Learn about Qualscan's vision, expertise, and journey in teleradiology since 1999. Serving hospitals across India, US, Africa, and the Middle East.",
};

const timeline = [
  {
    year: "1999",
    title: "Foundation",
    description:
      "Started providing services to super-specialty hospitals and medical colleges.",
  },
  {
    year: "2001",
    title: "Expansion",
    description:
      "Established standalone diagnostic facilities across India.",
  },
  {
    year: "2006",
    title: "Teleradiology Launch",
    description:
      "Started teleradiology operations across India, Africa, and the Middle East.",
  },
  {
    year: "2018",
    title: "US Operations",
    description:
      "Started United States operations with a client hospital in Florida.",
  },
  {
    year: "2025",
    title: "Growing Presence",
    description:
      "Serving facilities in Florida, New Jersey, Texas, and Indiana.",
  },
];

const missionPoints = [
  "Staffed with accomplished radiologists with more than 50 years of combined experience.",
  "Deliver world-class medical imaging services at competitive pricing.",
  "Provide teleradiology services for hospitals in India, the United States, Africa, and the Middle East.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="About Us"
            title="Pioneering Teleradiology Excellence"
            subtitle="With over two decades of experience, Qualscan delivers world-class radiology reporting solutions that healthcare facilities trust."
          />
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<EyeIcon />}
              title="Vision"
              description="Committed to providing top-quality diagnostic imaging and easy access for clients."
            />
            <FeatureCard
              icon={<AwardIcon />}
              title="Expertise"
              description="High-end radiology services specializing in multiple imaging modalities."
            />
            <FeatureCard
              icon={<CogIcon />}
              title="Right Process"
              description="State-of-the-art radiological reporting solutions and turnkey workflows."
            />
            <FeatureCard
              icon={<UsersIcon />}
              title="Right People"
              description="Team of accomplished radiologists with extensive experience."
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-900/30 border-y border-white/5">
        <div className="container-max mx-auto">
          <SectionHeader
            label="Our Journey"
            title="Experience Timeline"
            subtitle="A legacy of excellence in diagnostic imaging and teleradiology."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="card-glass">
                    <span className="text-accent font-bold text-2xl">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1">
                      {item.title}
                    </h3>
                    <p className="text-navy-300 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-navy-950 z-10" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <SectionHeader
            label="Our Mission"
            title="Delivering Excellence in Medical Imaging"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 card-glass"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <CheckIcon />
                </div>
                <p className="text-navy-200 leading-relaxed pt-2">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EyeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function CogIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
