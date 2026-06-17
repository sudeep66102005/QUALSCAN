"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", organization: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container-max mx-auto relative z-10">
          <SectionHeader
            label="Contact Us"
            title="Let's Start a Conversation"
            subtitle="Get in touch with our team to discuss how Qualscan can enhance your radiology services."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/logo-mark.svg" alt="Qualscan" className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold text-white">QUALSCAN</h3>
                    <p className="text-xs text-navy-400 uppercase tracking-wider">
                      Every Interaction Counts
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="card-glass flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-white font-medium">US Contact</p>
                    <a
                      href="tel:+12396919529"
                      className="text-navy-300 hover:text-accent transition-colors"
                    >
                      +1 (239) 691-9529
                    </a>
                  </div>
                </div>

                <div className="card-glass flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-white font-medium">India Contact</p>
                    <a
                      href="tel:+919902944847"
                      className="text-navy-300 hover:text-accent transition-colors"
                    >
                      +91 9902944847
                    </a>
                  </div>
                </div>

                <div className="card-glass flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href="mailto:qualscan@gmail.com"
                      className="text-navy-300 hover:text-accent transition-colors"
                    >
                      qualscan@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="card-glass">
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                  <GlobeIcon />
                  Global Presence
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {["India", "United States", "Africa", "Middle East"].map(
                    (region) => (
                      <div
                        key={region}
                        className="flex items-center gap-2 text-sm text-navy-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {region}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-glass">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy-200 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-navy-200 mb-2"
                      >
                        Hospital / Organization *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="Organization name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy-200 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-200 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-200 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Tell us about your radiology reporting needs..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
