'use client';
import React, { useState } from 'react';
import { Briefcase, GraduationCap, FlaskConical, BookOpen, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

const ExperiencePage = () => {
     const [expandedIndex, setExpandedIndex] = useState(null);
     const [activeTab, setActiveTab] = useState('professional');

     const professionalExperiences = [
          {
               title: "Research Assistant",
               company: "Washington University Of Science & Technology (WUST), USA",
               period: "2024 - Present",
               type: "Research",
               icon: FlaskConical,
               responsibilities: [
                    "Conducted research in software engineering and data science",
                    "Assisted in grant proposal writing and research project management",
                    "Collaborated with senior researchers on academic publications",
                    "Participated in data collection and analysis activities",
                    "Presented research findings at academic conferences",
                    "Conducting research in Computer Vision and Machine Learning, with active contributions to collaborative international publications",
               ],
               skills: ["Research Methodology", "Data Analysis", "Academic Writing", "Project Management"],
          },
          {
               title: "Assistant Professor & Lab In-charge",
               company: "Daffodil International University (DIU)",
               period: "August 2022 - Present",
               type: "Academic",
               icon: GraduationCap,
               responsibilities: [
                    "Leading research initiatives in data science and machine learning",
                    "Managing computer science laboratory operations and equipment",
                    "Developing curriculum for undergraduate and graduate programs",
                    "Supervising student research projects and thesis work",
                    "Collaborating with industry partners on applied research projects",
               ],
               skills: ["Research Leadership", "Curriculum Development", "Lab Management", "Student Mentoring", "Thesis Supervisor"],
          },
          {
               title: "Senior Lecturer",
               company: "Daffodil International University (DIU)",
               period: "June 2020 - August 2022",
               type: "Academic",
               icon: BookOpen,
               responsibilities: [
                    "Taught advanced courses in data science and machine learning",
                    "Led curriculum development initiatives for software engineering program",
                    "Conducted research in educational technology and data analytics",
                    "Mentored junior faculty members and graduate students",
                    "Organized academic conferences and workshops",
               ],
               skills: ["Advanced Teaching", "Curriculum Design", "Research", "Faculty Leadership"],
          },
          {
               title: "Lecturer",
               company: "Daffodil International University (DIU)",
               period: "September 2017 - May 2020",
               type: "Academic",
               icon: BookOpen,
               responsibilities: [
                    "Delivered lectures on software engineering and programming courses",
                    "Supervised undergraduate final year projects",
                    "Participated in academic research and publication activities",
                    "Contributed to departmental administrative tasks",
                    "Engaged in professional development and training programs",
               ],
               skills: ["Teaching", "Project Supervision", "Academic Research", "Student Assessment"],
          },
          {
               title: "Research Associate",
               company: "Daffodil International University (DIU)",
               period: "January 2017 - August 2017",
               type: "Research",
               icon: FlaskConical,
               responsibilities: [
                    "Conducted research in software engineering and data science",
                    "Assisted in grant proposal writing and research project management",
                    "Collaborated with senior researchers on academic publications",
                    "Participated in data collection and analysis activities",
                    "Presented research findings at academic conferences",
               ],
               skills: ["Research Methodology", "Data Analysis", "Academic Writing", "Project Management"],
          },
          {
               title: "Teaching Apprentice",
               company: "Daffodil International University (DIU)",
               period: "November 2016 - December 2016",
               type: "Academic",
               icon: FlaskConical,
               responsibilities: [
                    "Delivering parts of a lesson while the lead teacher manages the rest",
                    "Contributing ideas to departmental meetings about how to teach specific topics or improve existing schemes of work",
                    "Recording grades and progress data into the school's tracking system",
                    "Meeting weekly with campus-based mentor to review your progress, set targets for the following week, and reflect on your teaching practice",
                    "Presented research findings at academic conferences",
               ],
               skills: ["Research Methodology", "Data Analysis", "Academic Writing", "Project Management"],
          },
          {
               title: "Technical Writer",
               company: "IEC Ltd.",
               period: "2016",
               type: "Industry",
               icon: Briefcase,
               responsibilities: [
                    "Created comprehensive technical documentation for software products",
                    "Developed user manuals and API documentation",
                    "Collaborated with development teams to understand product features",
                    "Maintained and updated existing documentation",
                    "Ensured documentation quality and consistency",
               ],
               skills: ["Technical Writing", "Documentation", "API Documentation", "Content Management"],
          },
          {
               title: "Android Trainer",
               company: "ICT Division Bangladesh",
               period: "2014",
               type: "Training",
               icon: Award,
               responsibilities: [
                    "Conducted Android development training programs",
                    "Designed training curriculum and materials",
                    "Mentored participants in mobile app development",
                    "Evaluated trainee progress and provided feedback",
                    "Organized hands-on workshops and coding sessions",
               ],
               skills: ["Android Development", "Training Delivery", "Curriculum Design", "Mentoring"],
          },
     ];

     const industrialExperiences = [
          {
               title: "Senior Full-Stack Developer",
               company: "TechVision Solutions",
               period: "January 2024 - Present",
               type: "Part-Time",
               icon: Briefcase,
               status: "current",
               responsibilities: [
                    "Architecting and developing scalable web applications using React, Node.js, and MongoDB",
                    "Leading code reviews and implementing best practices across development teams",
                    "Integrating third-party APIs and building RESTful services",
                    "Optimizing application performance and implementing CI/CD pipelines",
                    "Mentoring junior developers and conducting technical training sessions",
               ],
               skills: ["React.js", "Node.js", "MongoDB", "AWS", "Docker", "Git"],
               technologies: ["TypeScript", "Express.js", "PostgreSQL", "Redis", "GraphQL"],
          },
          {
               title: "Machine Learning Engineer",
               company: "DataMinds AI Lab",
               period: "June 2023 - Present",
               type: "Part-Time",
               icon: FlaskConical,
               status: "current",
               responsibilities: [
                    "Developing and deploying machine learning models for predictive analytics",
                    "Building data pipelines for automated model training and evaluation",
                    "Implementing computer vision solutions using TensorFlow and PyTorch",
                    "Collaborating with data scientists on feature engineering and model optimization",
                    "Creating APIs for ML model integration with production systems",
               ],
               skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
               technologies: ["Keras", "OpenCV", "FastAPI", "Jupyter", "MLflow"],
          },
          {
               title: "DevOps Engineer",
               company: "CloudScale Systems",
               period: "March 2022 - December 2023",
               type: "Contract",
               icon: Briefcase,
               status: "past",
               responsibilities: [
                    "Managed cloud infrastructure on AWS and Azure platforms",
                    "Automated deployment processes using Jenkins, GitHub Actions, and Terraform",
                    "Implemented containerization strategies with Docker and Kubernetes",
                    "Set up monitoring and logging solutions using Prometheus and ELK stack",
                    "Reduced deployment time by 60% through infrastructure automation",
               ],
               skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
               technologies: ["Ansible", "Prometheus", "Grafana", "Nginx", "GitLab CI"],
          },
          {
               title: "Backend Developer",
               company: "FinTech Innovations Ltd.",
               period: "August 2020 - February 2022",
               type: "Full-Time",
               icon: Briefcase,
               status: "past",
               responsibilities: [
                    "Developed secure payment processing systems and financial APIs",
                    "Implemented microservices architecture for scalable backend systems",
                    "Designed and optimized database schemas for high-traffic applications",
                    "Ensured PCI-DSS compliance and implemented security best practices",
                    "Collaborated with frontend teams to deliver seamless user experiences",
               ],
               skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Redis", "RabbitMQ"],
               technologies: ["Maven", "JUnit", "OAuth 2.0", "Swagger", "Git"],
          },
          {
               title: "Mobile App Developer",
               company: "AppCraft Studios",
               period: "January 2019 - July 2020",
               type: "Full-Time",
               icon: Briefcase,
               status: "past",
               responsibilities: [
                    "Built cross-platform mobile applications using React Native and Flutter",
                    "Integrated mobile apps with backend APIs and cloud services",
                    "Implemented push notifications, in-app purchases, and analytics",
                    "Published multiple apps on Google Play Store and Apple App Store",
                    "Conducted performance optimization and bug fixing for production apps",
               ],
               skills: ["React Native", "Flutter", "Dart", "Firebase", "REST APIs", "SQLite"],
               technologies: ["Redux", "AsyncStorage", "Fastlane", "Crashlytics"],
          },
     ];

     const getTypeStyle = (type) => {
          switch (type) {
               case "Academic":
                    return {
                         badge: "bg-primary/10 text-primary border-primary/20",
                         dot: "bg-primary",
                         line: "bg-primary/30"
                    };
               case "Research":
                    return {
                         badge: "bg-accent/10 text-accent border-accent/20",
                         dot: "bg-accent",
                         line: "bg-accent/30"
                    };
               case "Industry":
               case "Full-Time":
                    return {
                         badge: "bg-purple-500/10 text-purple-600 border-purple-500/20",
                         dot: "bg-purple-500",
                         line: "bg-purple-500/30"
                    };
               case "Part-Time":
                    return {
                         badge: "bg-blue-500/10 text-blue-600 border-blue-500/20",
                         dot: "bg-blue-500",
                         line: "bg-blue-500/30"
                    };
               case "Contract":
                    return {
                         badge: "bg-orange-500/10 text-orange-600 border-orange-500/20",
                         dot: "bg-orange-500",
                         line: "bg-orange-500/30"
                    };
               case "Training":
                    return {
                         badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                         dot: "bg-emerald-500",
                         line: "bg-emerald-500/30"
                    };
               default:
                    return {
                         badge: "bg-muted/10 text-muted-foreground border-border",
                         dot: "bg-muted-foreground",
                         line: "bg-border"
                    };
          }
     };

     const currentExperiences = activeTab === 'professional' ? professionalExperiences : industrialExperiences;

     return (
          <div className="min-h-screen bg-background">
               <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                         <div className="inline-block mb-6">
                              <span className="px-5 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                                   Career Journey
                              </span>
                         </div>
                         <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                              Experience & Expertise
                         </h1>
                         <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                              A blend of academic excellence and industry innovation, driving impact across education and technology.
                         </p>
                    </div>

                    {/* Modern Toggle Switch */}
                    <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                         <div className="relative bg-card rounded-2xl p-2 border border-border shadow-lg inline-flex gap-2">
                              <div 
                                   className={`absolute top-2 bottom-2 left-2 rounded-xl bg-primary transition-all duration-300 ease-out ${
                                        activeTab === 'professional' ? 'w-[calc(50%-0.25rem)]' : 'w-[calc(50%-0.25rem)] translate-x-[calc(100%+0.5rem)]'
                                   }`}
                              />
                              <button
                                   onClick={() => {
                                        setActiveTab('professional');
                                        setExpandedIndex(null);
                                   }}
                                   className={`relative z-10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                                        activeTab === 'professional' 
                                             ? 'text-primary-foreground' 
                                             : 'text-muted-foreground hover:text-foreground'
                                   }`}
                              >
                                   <GraduationCap className="w-5 h-5" />
                                   Professional Experience
                              </button>
                              <button
                                   onClick={() => {
                                        setActiveTab('industrial');
                                        setExpandedIndex(null);
                                   }}
                                   className={`relative z-10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                                        activeTab === 'industrial' 
                                             ? 'text-primary-foreground' 
                                             : 'text-muted-foreground hover:text-foreground'
                                   }`}
                              >
                                   <Briefcase className="w-5 h-5" />
                                   Industrial Experience
                              </button>
                         </div>
                    </div>

                    {/* Career Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                         {activeTab === 'professional' ? (
                              <>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                  <GraduationCap className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-primary">8+</div>
                                                  <div className="text-sm text-muted-foreground">Years in Academia</div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                                  <Briefcase className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-accent">6</div>
                                                  <div className="text-sm text-muted-foreground">Professional Roles</div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                  <Award className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-primary">4</div>
                                                  <div className="text-sm text-muted-foreground">Career Progressions</div>
                                             </div>
                                        </div>
                                   </div>
                              </>
                         ) : (
                              <>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                                                  <Briefcase className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-blue-600">5+</div>
                                                  <div className="text-sm text-muted-foreground">Years in Industry</div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                                                  <FlaskConical className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-purple-600">5</div>
                                                  <div className="text-sm text-muted-foreground">Industry Roles</div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="animate-fade-in-up bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                             <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                                  <Award className="w-7 h-7" />
                                             </div>
                                             <div>
                                                  <div className="text-3xl font-bold text-emerald-600">2</div>
                                                  <div className="text-sm text-muted-foreground">Active Part-Time</div>
                                             </div>
                                        </div>
                                   </div>
                              </>
                         )}
                    </div>

                    {/* Experience Timeline */}
                    <div className="relative">
                         {/* Timeline Line */}
                         <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                         <div className="space-y-8">
                              {currentExperiences.map((exp, index) => {
                                   const IconComponent = exp.icon;
                                   const typeStyle = getTypeStyle(exp.type);
                                   const isExpanded = expandedIndex === index;

                                   return (
                                        <div
                                             key={index}
                                             className="relative group animate-fade-in-up"
                                             style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                        >
                                             {/* Timeline Dot */}
                                             <div className={`hidden lg:block absolute left-8 top-8 w-4 h-4 rounded-full ${typeStyle.dot} -translate-x-1/2 ring-4 ring-background z-10`}></div>

                                             {/* Content Card */}
                                             <div className="lg:ml-20">
                                                  <div
                                                       className="bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                                                       onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                                  >
                                                       {/* Header */}
                                                       <div className="p-6 lg:p-8">
                                                            <div className="flex items-start gap-4 mb-4">
                                                                 <div className={`w-14 h-14 rounded-xl ${typeStyle.badge.replace('text-', 'bg-').replace('/10', '/20')} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                                      <IconComponent className="w-7 h-7" />
                                                                 </div>

                                                                 <div className="flex-1 min-w-0">
                                                                      <div className="flex flex-wrap items-center gap-3 mb-2">
                                                                           <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                                                           <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${typeStyle.badge}`}>
                                                                                {exp.type}
                                                                           </span>
                                                                           {exp.status === 'current' && (
                                                                                <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-500/10 text-emerald-600 border-emerald-500/20 animate-pulse">
                                                                                     Currently Active
                                                                                </span>
                                                                           )}
                                                                      </div>

                                                                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                                                                           <div className="flex items-center gap-2">
                                                                                <MapPin className="w-4 h-4" />
                                                                                <span className="font-medium text-primary">{exp.company}</span>
                                                                           </div>
                                                                           <div className="flex items-center gap-2">
                                                                                <Calendar className="w-4 h-4" />
                                                                                <span className="text-sm">{exp.period}</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>

                                                                 <ChevronRight className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                                                            </div>

                                                            {/* Expanded Content */}
                                                            <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-300 ${isExpanded ? 'mt-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                                 {/* Responsibilities */}
                                                                 <div className="lg:col-span-2">
                                                                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                                                                           <div className="w-1 h-4 bg-primary rounded-full"></div>
                                                                           Key Responsibilities
                                                                      </h4>
                                                                      <ul className="space-y-3">
                                                                           {exp.responsibilities.map((responsibility, idx) => (
                                                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                                                     <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${typeStyle.dot}`} />
                                                                                     <span className="leading-relaxed text-sm">{responsibility}</span>
                                                                                </li>
                                                                           ))}
                                                                      </ul>
                                                                 </div>

                                                                 {/* Skills & Technologies */}
                                                                 <div>
                                                                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                                                                           <div className="w-1 h-4 bg-primary rounded-full"></div>
                                                                           Key Skills
                                                                      </h4>
                                                                      <div className="flex flex-wrap gap-2 mb-6">
                                                                           {exp.skills.map((skill, idx) => (
                                                                                <span
                                                                                     key={idx}
                                                                                     className="px-3 py-1.5 bg-muted/50 hover:bg-muted text-muted-foreground text-xs rounded-lg border border-border transition-colors duration-200"
                                                                                >
                                                                                     {skill}
                                                                                </span>
                                                                           ))}
                                                                      </div>
                                                                      
                                                                      {exp.technologies && (
                                                                           <>
                                                                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2 mt-6">
                                                                                     <div className="w-1 h-4 bg-accent rounded-full"></div>
                                                                                     Technologies
                                                                                </h4>
                                                                                <div className="flex flex-wrap gap-2">
                                                                                     {exp.technologies.map((tech, idx) => (
                                                                                          <span
                                                                                               key={idx}
                                                                                               className="px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-accent text-xs rounded-lg border border-accent/20 transition-colors duration-200"
                                                                                          >
                                                                                               {tech}
                                                                                          </span>
                                                                                     ))}
                                                                                </div>
                                                                           </>
                                                                      )}
                                                                 </div>
                                                            </div>
                                                       </div>

                                                       {/* Bottom Accent */}
                                                       <div className={`h-1 ${typeStyle.dot} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>

                    {/* Career Highlights */}
                    <div className="mt-32 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                         <div className="relative bg-card rounded-3xl p-12 shadow-lg border border-border overflow-hidden">
                              <div className="absolute inset-0 bg-primary/5"></div>
                              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

                              <div className="relative z-10 text-center max-w-3xl mx-auto">
                                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                        <Award className="w-8 h-8" />
                                   </div>
                                   <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                        {activeTab === 'professional' ? 'Academic Excellence' : 'Industry Innovation'}
                                   </h2>
                                   <p className="text-muted-foreground text-lg leading-relaxed">
                                        {activeTab === 'professional' 
                                             ? "My career reflects a strong dedication to teaching, research, and the development of students. Each role, from working in several technical positions through to leadership in academia, has enabled me to become more knowledgeable about education, technology, and research, and the connection between them, so that they work to create meaningful impact."
                                             : "Bridging academia and industry, I bring cutting-edge technical expertise to real-world applications. My industrial experience spans full-stack development, machine learning, DevOps, and mobile applications, demonstrating versatility and commitment to delivering innovative solutions that drive business growth and technological advancement."
                                        }
                                   </p>
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


export default ExperiencePage;

