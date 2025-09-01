"use client";

import { useEffect, useState } from "react";
import { Building2, Calendar, TrendingUp, ArrowUpRight, Briefcase, Award, Users, CheckCircle } from "lucide-react";

export default function ModernExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "GoInnovior Limited",
      period: "2024 – Present",
      role: "Business Analyst",
      type: "Full-time",
      achievements: [
        "Requirements gathering, pre-sales, product demos → improved client onboarding by 30%",
        "Gap Analysis for Pacific Jeans Group & Maheen Label Tex Ltd",
        "Delivered ERP, HRM, Corporate Websites with 70%+ on-time rate",
      ],
      clients: ["Pretty Group", "E-Group", "Impress Group", "Paiker Foods", "Arab Ship Breaking Ltd"],
      icon: <Building2 className="h-6 w-6" />,
      gradient: "from-emerald-500 to-cyan-500",
      hoverGradient: "from-emerald-500/10 to-cyan-500/10",
      borderGradient: "emerald-500/30",
    },
    {
      company: "Global Ed Expo",
      period: "2023",
      role: "System Enhancement Specialist",
      type: "Contract",
      achievements: [
        "Enhanced system UX, increasing engagement by 30%",
        "Improved user experience and system efficiency",
        "Collaborated with cross-functional teams for system optimization",
      ],
      clients: [],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-orange-500 to-rose-500",
      hoverGradient: "from-orange-500/10 to-rose-500/10",
      borderGradient: "orange-500/30",
    },
  ];

  return (
    <section id="work" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-400/5 to-rose-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Professional Journey</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proven track record in business analysis, client engagement, and digital transformation across multiple
            industries with measurable impact and results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              {/* Connecting Line */}
              {index > 0 && (
                <div className="absolute -top-4 left-8 w-px h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
              )}
              
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.hoverGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon & Timeline */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            {exp.role}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm border border-white/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <Calendar className="h-4 w-4 text-emerald-400" />
                        <span className="text-gray-300 font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-400" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 group/item">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            </div>
                            <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clients */}
                    {exp.clients.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-cyan-400" />
                          Key Clients
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.clients.map((client, i) => (
                            <div
                              key={i}
                              className="group/client px-4 py-2 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
                            >
                              <span className="text-gray-300 font-medium group-hover/client:text-white transition-colors duration-300">
                                {client}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-6 p-6 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-emerald-500/20 transition-all duration-300">
            <div className="text-left">
              <h4 className="text-xl font-semibold text-white mb-2">Want to see detailed case studies?</h4>
              <p className="text-gray-400">Explore my project portfolio for in-depth analysis</p>
            </div>
            <button className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25">
              <div className="flex items-center gap-2">
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}