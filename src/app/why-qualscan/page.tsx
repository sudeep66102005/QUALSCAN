import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Qualscan | Key Advantages",
  description:
    "Discover why healthcare facilities choose Qualscan: subspecialty expertise, consistent reporting, seamless integration, quality control, and fast turnaround.",
};

const advantages = [
  {
    title: "Subspecialty Expertise",
    description: "Large case volumes handled by subspecialty radiologists ensuring deep expertise in every modality.",
    icon: <ExpertIcon />,
    stat: "50+",
    statLabel: "Years Combined Experience",
  },
  {
    title: "Consistent & Accurate Reporting",
    description: "Standardized reporting protocols with consistent quality across all cases and modalities.",
    icon: <AccuracyIcon />,
    stat: "99%+",
    statLabel: "Accuracy Rate",
  },
  {
    title: "Seamless Technology Integration",
    description: "Easy integration with your existing PACS, RIS, and HIS systems with minimal disruption.",
    icon: <IntegrationIcon />,
    stat: "24hrs",
    statLabel: "Setup Time",
  },
  {
    title: "Senior Quality Control",
    description: "Every report quality checked by senior radiologists before final submission.",
    icon: <QualityIcon />,
    stat: "2-Tier",
    statLabel: "QC Process",
  },
  {
    title: "Fast Turnaround Times",
    description: "Industry-leading turnaround times with sub-30-minute wet reads and sub-60-minute STAT finals.",
    icon: <SpeedIcon />,
    stat: "<30min",
    statLabel: "Wet Reads",
  },
  {
    title: "Global Client Support",
    description: "Dedicated support teams across multiple time zones ensuring 24/7 accessibility.",
    icon: <SupportIcon />,
    stat: "4+",
    statLabel: "Global Regions",
  },
];

export default function WhyQualscanPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="Why Choose Us"
            title="The Qualscan Advantage"
            subtitle="We deliver measurable value to healthcare facilities with our unique combination of expertise, technology, and commitment."
          />
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="card-glass group relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {advantage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed mb-6">
                  {advantage.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-accent">
                    {advantage.stat}
                  </span>
                  <span className="text-xs text-navy-400 ml-2">
                    {advantage.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-navy-800 to-navy-900 border border-white/10 p-8 md:p-16 text-center">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner with the Best
              </h2>
              <p className="text-navy-200 max-w-xl mx-auto mb-8">
                Join healthcare facilities worldwide who trust Qualscan for
                their radiology reporting needs.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Your Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ExpertIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

function AccuracyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
