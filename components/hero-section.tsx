"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Business Analyst & Strategist";

  useEffect(() => {
    setIsVisible(true);

    let i = 0;
    const typewriterInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <section className="min-h-screen bg-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-white drop-shadow-lg">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="w-20 h-1 bg-blue-500"></div>
            <h2 className="font-poppins text-xl md:text-2xl text-white/90 text-pretty drop-shadow-md">
              Bridging Business Goals with Technology
            </h2>
            <p className="text-lg text-white/80 max-w-xl text-pretty leading-relaxed drop-shadow-sm">
              Helping organizations unlock efficiency through data, strategy,
              and human-centered digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="transition-transform duration-200">
                <Button
                  size="lg"
                  className="bg-blue-500 text-white font-montserrat font-medium rounded-full px-6 py-3 flex items-center gap-2 hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  View My Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </a>

              <a
                href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-montserrat font-medium rounded-xl bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/25"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/hero-professional.jpeg"
                  alt="Mahabub Jamil Showvik - Professional Business Analyst"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-poppins font-bold text-sm text-center">
                  2+ Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
