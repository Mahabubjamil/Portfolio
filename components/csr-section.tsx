"use client";

import { useEffect, useState } from "react";
import { Code, Users, Lightbulb, Bot, BookOpen, Heart, ArrowUpRight, Sparkles, Target, Award } from "lucide-react";

export default function ModernCSRSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("csr");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    {
      number: "50+",
      label: "Kids Taught",
      description: "Programming & AI fundamentals",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      number: "10+", 
      label: "Workshops",
      description: "Interactive learning sessions",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-orange-500 to-rose-500"
    },
    {
      number: "5+",
      label: "Programs",
      description: "Structured learning paths",
      icon: <Lightbulb className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const programs = [
    "Python Programming for Beginners",
    "AI & Machine Learning Basics", 
    "Creative Design Workshops",
    "Future Tech Exploration"
  ];

  return (
    <section
      id="csr"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-400/5 to-rose-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Social Impact</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
            CSR – Codeinnovior
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div
            className={`relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl"></div>
            
            <div className="relative text-center space-y-8">
              {/* Hero Icons */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Bot className="h-10 w-10 text-white" />
                </div>
                <div className="text-emerald-400 text-3xl font-bold">+</div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  "Introducing Kids to the World of AI"
                </h3>

                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  As part of GoInnovior's CSR, I lead initiatives under
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-semibold"> Codeinnovior</span>, empowering kids and students with coding, design,
                  and AI literacy. From teaching Python programming to guiding
                  them into the world of AI, we focus on building future-ready
                  professionals from a young age.
                </p>

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
                  <p className="text-lg text-white font-medium">
                    Our mission is to democratize technology education and create
                    the next generation of innovators.
                  </p>
                </div>
              </div>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {programs.map((program, index) => (
                  <div
                    key={program}
                    className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {program}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient.replace('from-', 'from-').replace('to-', 'to-')} mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-emerald-500/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                    Join Our Mission
                  </h4>
                  <p className="text-gray-300">
                    Help us empower the next generation with technology education
                  </p>
                </div>
              </div>
              <a
                href="https://codeinnovior.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25">
                  <div className="flex items-center gap-2">
                    Visit Codeinnovior
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}