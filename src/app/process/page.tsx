import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Process | Qualscan Teleradiology Workflow",
  description:
    "Discover Qualscan's streamlined 5-step teleradiology process from scan upload to final report delivery with quality control.",
};

const steps = [
  {
    number: "01",
    title: "Scan Upload",
    description: "Scans completed and uploaded to the cloud.",
    detail: "Your facility completes the imaging study and uploads it securely to our cloud-based PACS system via encrypted connection.",
    icon: <UploadIcon />,
  },
  {
    number: "02",
    title: "Radiologist Review",
    description: "Radiologist review.",
    detail: "A subspecialty-trained radiologist is immediately assigned based on modality and study type for expert interpretation.",
    icon: <ReviewIcon />,
  },
  {
    number: "03",
    title: "Report Optimization",
    description: "Reports optimized in prescribed formats.",
    detail: "The report is structured according to your facility's prescribed templates and formatting requirements.",
    icon: <DocumentIcon />,
  },
  {
    number: "04",
    title: "Quality Control",
    description: "Final quality control by senior radiologist.",
    detail: "A senior radiologist performs comprehensive quality review ensuring accuracy, completeness, and clinical relevance.",
    icon: <QualityIcon />,
  },
  {
    number: "05",
    title: "Report Delivery",
    description: "Final report submitted within agreed turnaround time.",
    detail: "The finalized report is delivered back to your system within the agreed turnaround time, meeting all SLA commitments.",
    icon: <DeliveryIcon />,
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="Our Process"
            title="Streamlined Reporting Workflow"
            subtitle="A proven 5-step process designed for speed, accuracy, and seamless integration with your facility."
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="max-w-4xl mx-auto relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20" />

            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10 mb-12 last:mb-0">
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-navy-800 border-2 border-accent/30 flex flex-col items-center justify-center group-hover:border-accent transition-colors">
                    <span className="text-accent font-bold text-lg md:text-2xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-glass flex-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-navy-200 font-medium mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-navy-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Summary */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="card-glass inline-flex flex-col items-center px-8 md:px-16 py-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  End-to-End Process
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                From Scan to Report in Under 60 Minutes
              </p>
              <p className="text-navy-300 mt-2">
                STAT cases prioritized with guaranteed turnaround times
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function UploadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
