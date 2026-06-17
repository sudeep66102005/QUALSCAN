import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Values | Qualscan Teleradiology",
  description:
    "Qualscan's core values: High Quality, Accomplished Radiologists, Transparent Pricing, and Long-Term Client Satisfaction.",
};

const values = [
  {
    title: "High Quality",
    description: "We maintain the highest standards in every report, ensuring clinical accuracy and completeness that healthcare providers can trust for critical patient care decisions.",
    icon: <QualityIcon />,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-400/30",
    iconBg: "bg-blue-500/10 border-blue-400/20",
    textColor: "text-blue-400",
  },
  {
    title: "Accomplished Radiologists",
    description: "Our team consists of board-certified, subspecialty-trained radiologists with extensive experience across all imaging modalities and clinical scenarios.",
    icon: <DoctorIcon />,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-400/30",
    iconBg: "bg-emerald-500/10 border-emerald-400/20",
    textColor: "text-emerald-400",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, competitive pricing with no hidden fees. We believe in building trust through transparency in all our business practices and client relationships.",
    icon: <PricingIcon />,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-400/30",
    iconBg: "bg-amber-500/10 border-amber-400/20",
    textColor: "text-amber-400",
  },
  {
    title: "Long-Term Client Satisfaction",
    description: "We invest in lasting partnerships, continuously improving our services based on client feedback and evolving healthcare needs to ensure enduring satisfaction.",
    icon: <HandshakeIcon />,
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-400/30",
    iconBg: "bg-purple-500/10 border-purple-400/20",
    textColor: "text-purple-400",
  },
];

export default function ValuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            subtitle="Our core values guide every decision we make and every report we deliver."
          />
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${value.color} border ${value.borderColor} p-8 md:p-10 group hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Decorative Circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${value.iconBg} border flex items-center justify-center ${value.textColor} mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-navy-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mt-16">
            <p className="text-navy-400 text-sm uppercase tracking-wider mb-2">
              Our Promise
            </p>
            <p className="text-3xl md:text-4xl font-bold gradient-text">
              &ldquo;Every Interaction Counts&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function QualityIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  );
}
