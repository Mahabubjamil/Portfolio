"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import image from "../public/images/hero-professional.jpeg";

export default function ModernHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Business Analyst ";

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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">
                Available for Projects
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-bold font-philosopher text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                {typewriterText}
                <span className="animate-pulse text-emerald-400">|</span>
              </h1>

              {/* Animated underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              Bridging Business Goals with Technology
            </h2>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Helping organizations unlock efficiency through data-driven
              insights, strategic thinking, and human-centered digital
              transformation.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  2+
                </div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  100%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  View My Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>

              <a
                href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 rounded-2xl font-semibold text-gray-300 border-2 border-gray-600/50 backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative group">
              {/* Gradient Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>

              {/* Profile Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700/50 backdrop-blur-sm bg-gray-800/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Image src={image} alt="" width={600} height={400} />
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl shadow-2xl transform group-hover:rotate-6 transition-all duration-500">
                <div className="text-center">
                  <div className="text-white font-bold text-lg">2+ Years</div>
                  <div className="text-white/90 text-sm">Experience</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 p-3 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl shadow-lg animate-float">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>

              <div className="absolute bottom-20 -right-16 p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl shadow-lg animate-float-delay">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
