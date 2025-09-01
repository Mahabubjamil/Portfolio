"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Brain, Activity, GraduationCap, Building, MessageSquare, Target, Code, Sparkles, ArrowUpRight, CheckCircle } from "lucide-react";

export default function ModernProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI for Healthcare & Precision Medicine",
      description: "Explainable AI for Disease Progression Prediction",
      tools: ["PyTorch", "SHAP", "LIME"],
      outcome: "Risk prediction dashboard with interpretability",
      category: "ai",
      icon: <Activity className="h-6 w-6" />,
      gradient: "from-emerald-500 to-cyan-500",
      featured: true,
    },
    {
      title: "Climate AI – Flood Risk Prediction",
      description: "Flood Risk Prediction for Bangladesh",
      tools: ["Google Earth Engine", "PyTorch Geospatial"],
      outcome: "Interactive flood risk map + forecasting alerts",
      category: "ai",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-cyan-500 to-violet-500",
      featured: true,
    },
    {
      title: "EduAI: Personalized Study Guidance",
      description: "Personalized Study Guidance Assistant",
      tools: ["HuggingFace", "LangChain", "RAG"],
      outcome: "Scholarship recommender + AI chatbot",
      category: "ai",
      icon: <GraduationCap className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500",
      featured: false,
    },
    {
      title: "AI for Mental Health",
      description: "Mental health monitoring and awareness platform",
      tools: ["HuggingFace NLP", "TensorFlow"],
      outcome: "Mental health monitoring dashboard (awareness-focused)",
      category: "ai",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-orange-500 to-rose-500",
      featured: false,
    },
    {
      title: "ERP Gap Analysis – Impress Group",
      description: "Comprehensive ERP system analysis and optimization",
      tools: ["Business Analysis", "Process Mapping"],
      outcome: "Identified inefficiencies → improved automation & data accuracy",
      category: "erp",
      icon: <Building className="h-6 w-6" />,
      gradient: "from-emerald-500 to-cyan-500",
      featured: true,
    },
    {
      title: "Product Review Analysis",
      description: "ML/NLP-powered product review insights",
      tools: ["NLP", "Machine Learning", "Data Analysis"],
      outcome: "Extracted insights from reviews → guided product improvement",
      category: "ai",
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: "from-cyan-500 to-violet-500",
      featured: false,
    },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filterOptions = [
    { value: "all", label: "All Projects", icon: <Target className="w-4 h-4" /> },
    { value: "ai", label: "AI Projects", icon: <Brain className="w-4 h-4" /> },
    { value: "erp", label: "ERP Projects", icon: <Building className="w-4 h-4" /> },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-violet-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Portfolio Showcase</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Showcasing innovative solutions across AI, healthcare, climate tech, and enterprise systems 
            with measurable business impact.
          </p>

          {/* Filter Buttons */}
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === option.value
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-8"
              } ${project.featured ? 'lg:col-span-1 md:col-span-1' : ''}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-medium">
                    Featured
                  </div>
                )}

                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-gray-300 font-medium text-sm">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm hover:border-emerald-500/30 hover:text-white transition-all duration-300"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 font-medium text-sm">Impact</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full group/btn mt-6 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-cyan-500/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 group-hover/btn:text-white font-medium transition-colors duration-300">
                        View Case Study
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: '1000ms' }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
                  Ready to Start Your Next Project?
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Let's collaborate to transform your business challenges into innovative, data-driven solutions 
                  that deliver measurable results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25">
                  <div className="flex items-center gap-2">
                    Discuss Project
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </button>
                <button className="group px-8 py-4 rounded-2xl font-semibold text-gray-300 border-2 border-gray-600/50 backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
                    View All Work
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}