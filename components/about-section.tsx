"use client";

import { useEffect, useState } from "react";
import { Award, Users, Briefcase, Target, ArrowUpRight } from "lucide-react";

export default function ModernAboutSection() {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    industries: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 2, projects: 15, industries: 5 };
    const duration = 2000;
    const steps = 60;

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    });
  };

  const skills = [
    "Business Analysis",
    "Digital Transformation",
    "ERP Implementation",
    "Data Strategy",
    "Process Optimization",
    "Stakeholder Management"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Get to Know Me</span>
            </div>
            
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-semibold">Mahabub Jamil Showvik</span>, a Business Analyst with expertise in ERP, HRM, AI-driven projects, and digital
              transformation. With proven experience in gap analysis, product management, and client engagement, I
              specialize in translating complex business needs into actionable, technology-driven solutions.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
                  {counters.years}+
                </div>
                <div className="text-gray-300 font-medium text-lg">Years Experience</div>
                <div className="text-gray-400 text-sm mt-2">In business analysis & strategy</div>
              </div>
            </div>

            <div
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-rose-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mb-3">
                  {counters.projects}+
                </div>
                <div className="text-gray-300 font-medium text-lg">Projects Completed</div>
                <div className="text-gray-400 text-sm mt-2">Across multiple industries</div>
              </div>
            </div>

            <div
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-violet-500/30 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-3">
                  {counters.industries}+
                </div>
                <div className="text-gray-300 font-medium text-lg">Industries Served</div>
                <div className="text-gray-400 text-sm mt-2">From fintech to healthcare</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 mb-4">
                Core Expertise
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialized skills that drive business transformation and strategic growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-between">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: '1200ms' }}
          >
            <div className="inline-flex items-center gap-4 p-6 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-white mb-2">Ready to collaborate?</h4>
                <p className="text-gray-400">Let's discuss how I can help transform your business</p>
              </div>
              <button className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25">
                <div className="flex items-center gap-2">
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}