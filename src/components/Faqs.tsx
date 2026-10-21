"use client";

import React, { useState } from "react";

const FAQS_DATA = [
  {
    q: "How much does web design and development typically cost?",
    a: "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally prefer to agree a fixed cost with agreed milestone payments."
  },
  {
    q: "How long does a project usually take?",
    a: "A web design and build project can last around 12-14 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don’t work with this, it’s always worth reaching out. Expect clear milestones and a timeline that respects your urgency, without ever skimping on the quality that makes your site distinctly you."
  },
  {
    q: "Can your creative agency accommodate tight deadlines?",
    a: "Sure thing! We’re ready to mobilise our design and development teams, prioritising the essentials to turn your dream site from a fast-approaching deadline into a reality. Flexibility and focus are our middle names, ensuring your project crosses the finish line."
  },
  {
    q: "What ongoing support and maintenance do you offer post-launch?",
    a: "SiteCare is a huge part of what we offer here at KOTA. Think of us as the guardians of your digital home, offering a suite of post-launch support and maintenance services to ensure your website continues to thrive. From regular updates to performance tuning, we’re on hand to keep your site smooth, secure, and evolving along with your brand."
  },
  {
    q: "How do you handle revisions and feedback during the design process?",
    a: "Your feedback is the secret sauce in our design process. We welcome your thoughts, tweaks, and “aha” moments, incorporating them into each iteration to ensure the end product is nothing short of perfection. Our process is built on collaboration, making sure your voice is heard loud and clear at every turn."
  },
  {
    q: "Are there additional costs for digital marketing services integrated into web projects?",
    a: "Integrating our digital marketing services into your web project is like adding rocket fuel to your online presence. We offer clear, upfront pricing for any add-on services, ensuring you know exactly what to expect—no surprises. Whether part of a package deal or a la carte, we tailor our digital marketing solutions to fit your budget and goals. Get in touch to find out more!"
  }
];

export default function Faqs() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="faqs"
      className="relative bg-black text-white z-20"
      style={{
        paddingTop: "6.5rem",
        paddingBottom: "6.5rem"
      }}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "calc(1400px + 15%)",
          paddingLeft: "7.5%",
          paddingRight: "7.5%"
        }}
      >
        {/* Exact KOTA FAQ's Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            className="font-normal text-white"
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              margin: 0
            }}
          >
            FAQ&#x27;s
          </p>
        </div>

        {/* FAQs Accordion List matching live KOTA */}
        <div className="flex flex-col">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={idx}
                className="flex flex-col"
                style={{
                  padding: "0.25rem 0"
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start text-left focus:outline-none cursor-pointer"
                  style={{
                    gap: "1rem",
                    fontSize: "clamp(1.35rem, 1.8vw, 1.6rem)",
                    lineHeight: 1.25,
                    fontWeight: 400,
                    maxWidth: "44ch",
                    color: "#ffffff",
                    padding: "0.5rem 0",
                    background: "none",
                    border: "none"
                  }}
                  aria-expanded={isOpen}
                >
                  {/* Left Plus Icon (+) that rotates 45deg to (x) on expand */}
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                    style={{
                      width: "1.15ch",
                      height: "1.15ch",
                      marginTop: "0.15rem",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                    }}
                  >
                    <svg
                      viewBox="0 0 40 40"
                      className="w-full h-full fill-white"
                      style={{ fill: "#ffffff" }}
                    >
                      <path d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z" />
                    </svg>
                  </span>

                  {/* Question Text */}
                  <span>{faq.q}</span>
                </button>

                {/* Animated Accordion Answer with exact indent and typography */}
                <div
                  className="grid overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div
                    className="overflow-hidden"
                    style={{
                      paddingLeft: "calc(1rem + 1.15ch)",
                      maxWidth: "55ch"
                    }}
                  >
                    <p
                      className="text-white font-normal"
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: 1.33,
                        color: "#ffffff",
                        marginTop: "0.5rem",
                        marginBottom: "1.25rem"
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
