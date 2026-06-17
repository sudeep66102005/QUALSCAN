import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Services | Qualscan Teleradiology",
  description:
    "Emergency Nighthawk services, STAT reports, data analytics, and elective outpatient services. 24/7/365 coverage with fast turnaround times.",
};

const emergencyServices = [
  {
    title: "Preliminary Wet Reads",
    turnaround: "< 30 minutes",
    icon: <AlertIcon />,
    description: "Critical findings communicated immediately to referring physicians.",
  },
  {
    title: "STAT Final Reports",
    turnaround: "< 60 minutes",
    icon: <ClockIcon />,
    description: "Complete final reports for emergency cases with rapid delivery.",
  },
  {
    title: "Data Analytics",
    turnaround: "< 20 minutes",
    icon: <ChartIcon />,
    description: "Real-time reporting analytics and performance metrics.",
  },
];

const electiveFeatures = [
  { title: "Volume Flexibility", icon: <ScaleIcon /> },
  { title: "Night Coverage", icon: <MoonIcon /> },
  { title: "Improved Clinical Risk Management", icon: <ShieldIcon /> },
  { title: "Easy Technology Integrations", icon: <PlugIcon /> },
  { title: "Large Batch Case Handling", icon: <LayersIcon /> },
  { title: "High Accuracy and Consistency", icon: <TargetIcon /> },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Teleradiology Solutions"
            subtitle="From emergency nighthawk coverage to elective outpatient services, we provide end-to-end radiology reporting."
          />
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-400/10 border border-red-400/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              Emergency Services
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Emergency Nighthawk Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {emergencyServices.map((service) => (
              <div key={service.title} className="card-glass text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-navy-300 mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-accent font-semibold text-sm">
                    {service.turnaround}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center card-glass px-12 py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-slow" />
              </div>
              <p className="text-2xl font-bold text-white">Available 24/7</p>
              <p className="text-navy-300 mt-1">
                24 Hours a Day &bull; 365 Days a Year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elective Services */}
      <section className="section-padding bg-navy-900/30 border-y border-white/5">
        <div className="container-max mx-auto">
          <SectionHeader
            label="Elective Services"
            title="Electives & Outpatient Services"
            subtitle="Flexible solutions designed to scale with your facility's needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electiveFeatures.map((feature) => (
              <div key={feature.title} className="card-glass flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {feature.icon}
                </div>
                <h4 className="text-white font-medium">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AlertIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
