"use client";
import React, { useState } from 'react';
import { Brain, BarChart3, FlaskConical, GraduationCap, Network, PieChart, Code2, Database, FileSpreadsheet, Layers, Box, GitBranch, Users, Award, BookOpen, Mic, Lightbulb, FolderKanban, School, Image, TrendingUp, Laptop, Cpu } from 'lucide-react';

const SkillsPage = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Core Skills",
      description: "Primary areas of expertise with LinkedIn endorsements",
      skills: [
        { 
          name: "Machine Learning", 
          endorsed: true,
          icon: Brain,
          description: "Advanced ML algorithms and model development"
        },
        { 
          name: "Data Analysis", 
          endorsed: true,
          icon: BarChart3,
          description: "Statistical analysis and data interpretation"
        },
        { 
          name: "Research", 
          endorsed: true,
          icon: FlaskConical,
          description: "Academic research and publication"
        },
        { 
          name: "Teaching", 
          endorsed: true,
          icon: GraduationCap,
          description: "Educational instruction and mentorship"
        },
        { 
          name: "Deep Learning", 
          endorsed: false,
          icon: Network,
          description: "Neural networks and advanced AI"
        },
        { 
          name: "Data Visualization", 
          endorsed: false,
          icon: PieChart,
          description: "Creating impactful visual insights"
        },
      ],
    },
    {
      title: "Technical Tools & Technologies",
      description: "Software and programming tools used in research and teaching",
      skills: [
        { 
          name: "Python", 
          endorsed: false,
          icon: Code2,
          description: "Primary programming language"
        },
        { 
          name: "Power BI", 
          endorsed: false,
          icon: BarChart3,
          description: "Business intelligence and analytics"
        },
        { 
          name: "Tableau", 
          endorsed: false,
          icon: TrendingUp,
          description: "Data visualization platform"
        },
        { 
          name: "TensorFlow", 
          endorsed: false,
          icon: Cpu,
          description: "Deep learning framework"
        },
        { 
          name: "NumPy & Pandas", 
          endorsed: false,
          icon: Layers,
          description: "Data manipulation libraries"
        },
        { 
          name: "Excel", 
          endorsed: false,
          icon: FileSpreadsheet,
          description: "Spreadsheet analysis"
        },
        { 
          name: "Git", 
          endorsed: false,
          icon: GitBranch,
          description: "Version control system"
        },
        { 
          name: "SQL", 
          endorsed: false,
          icon: Database,
          description: "Database management"
        },
      ],
    },
    {
      title: "Academic & Professional Skills",
      description: "Soft skills developed through years of academic and professional experience",
      skills: [
        { 
          name: "Leadership", 
          endorsed: false,
          icon: Users,
          description: "Team management and guidance"
        },
        { 
          name: "Mentorship", 
          endorsed: false,
          icon: Award,
          description: "Student and peer mentoring"
        },
        { 
          name: "Academic Writing", 
          endorsed: false,
          icon: BookOpen,
          description: "Research papers and publications"
        },
        { 
          name: "Public Speaking", 
          endorsed: false,
          icon: Mic,
          description: "Presentations and conferences"
        },
        { 
          name: "Curriculum Development", 
          endorsed: false,
          icon: Lightbulb,
          description: "Course design and planning"
        },
        { 
          name: "Project Management", 
          endorsed: false,
          icon: FolderKanban,
          description: "Research project coordination"
        },
      ],
    },
    {
      title: "Research Areas",
      description: "Specialized research interests and ongoing projects",
      skills: [
        { 
          name: "Data Science in Education", 
          endorsed: false,
          icon: School,
          description: "Educational data analytics"
        },
        { 
          name: "Image Processing", 
          endorsed: false,
          icon: Image,
          description: "Computer vision techniques"
        },
        { 
          name: "Business Data Analytics", 
          endorsed: false,
          icon: TrendingUp,
          description: "Business intelligence insights"
        },
        { 
          name: "Educational Technology", 
          endorsed: false,
          icon: Laptop,
          description: "Technology-enhanced learning"
        },
        { 
          name: "Machine Learning Applications", 
          endorsed: false,
          icon: Box,
          description: "Real-world ML solutions"
        },
      ],
    },
  ];

  const achievements = [
    {
      title: "15+",
      subtitle: "LinkedIn Endorsements",
      description: "Professional recognition for core skills",
      icon: Award,
    },
    {
      title: "10+",
      subtitle: "Professional Certificates",
      description: "Continuous learning and skill development",
      icon: GraduationCap,
    },
    {
      title: "8+",
      subtitle: "Years Teaching",
      description: "Extensive academic instruction experience",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Professional Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of technical skills, research capabilities, and professional competencies developed through years of dedication
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="animate-fade-in-up group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.title}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.subtitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Skills Categories */}
        <div className="space-y-24">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative animate-fade-in-up" style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-block relative">
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;
                  
                  return (
                    <div
                      key={skillIndex}
                      className="group relative bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          {skill.endorsed && (
                            <span className="px-2.5 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full border border-primary/30">
                              ✓
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="relative bg-card rounded-3xl p-12 shadow-lg border border-border overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Continuous Learning & Development
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Committed to lifelong learning and staying current with the latest developments in data science, machine learning, and educational technology. My dedication to professional growth is reflected in ongoing certifications and active participation in research communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full text-foreground border border-border hover:border-primary transition-colors duration-300">
                  <TrendingUp className="w-4 h-4" />
                  <span>Innovation Focused</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full text-foreground border border-border hover:border-primary transition-colors duration-300">
                  <Award className="w-4 h-4" />
                  <span>Results Driven</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full text-foreground border border-border hover:border-primary transition-colors duration-300">
                  <GraduationCap className="w-4 h-4" />
                  <span>Excellence Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;