"use client"
import Image from "next/image"
import { MapPin, Mail, Calendar, Award, Sparkles } from "lucide-react"

const AboutPage = () => {
  const timelineEvents = [
     {
      year: "2016-2020",
      title: "M.Sc. in Software Engineering",
      institution: "Daffodil International University (DIU)",
      description: "Graduated with CGPA: 4.00/4.00. Developed a strong foundation in software engineering principles and programming.",
      type: "education",
    },
    {
      year: "2012-2015",
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University (DIU)",
      description: "Graduated with CGPA: 3.86/4.00. Developed a strong foundation in software engineering principles and programming.",
      type: "education",
    },
    {
      year: "2016",
      title: "Technical Writer",
      institution: "IEC Ltd.",
      description: "Created technical documentation and content for software products and services.",
      type: "work",
    },
    {
      year: "2016",
      title: "Teaching Apprentice",
      institution: "Daffodil International University",
      description: "Began academic journey by assisting senior faculty in teaching and research activities.",
      type: "work",
    },
    {
      year: "2017",
      title: "Research Associate",
      institution: "Daffodil International University",
      description: "Conducted research in software engineering and data science. Contributed to academic publications.",
      type: "work",
    },
    {
      year: "2017-2020",
      title: "Lecturer",
      institution: "Daffodil International University",
      description:
        "Taught undergraduate courses in software engineering and computer science. Mentored students in research projects.",
      type: "work",
    },
    {
      year: "2020-2022",
      title: "Senior Lecturer",
      institution: "Daffodil International University",
      description: "Advanced to senior teaching position. Led curriculum development and research initiatives.",
      type: "work",
    },
    {
      year: "2022-Present",
      title: "Assistant Professor & Lab In-charge",
      institution: "Daffodil International University",
      description:
        "Current role focusing on advanced research in data science, machine learning, and educational innovation.",
      type: "work",
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Getting to Know Me
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated educator and researcher with a passion for advancing data science and inspiring the next
            generation of engineers.
          </p>
        </div>

        {/* Profile Card - Modern Design */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 rounded-3xl p-1 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-purple-500/10 blur-3xl animate-pulse"></div>
            
            <div className="relative bg-card rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
                {/* Left Side - Profile Image */}
                <div className="lg:col-span-2 flex flex-col items-center justify-center">
                  <div className="relative group">
                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl animate-pulse"></div>
                    
                    {/* Profile Image Container */}
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/profile.jpeg"
                        alt="Md. Shohel Arman"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                        priority
                      />
                      {/* Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg border-4 border-background flex items-center gap-2 whitespace-nowrap">
                      <Award className="w-4 h-4" />
                      <span className="font-semibold text-sm">8+ Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Profile Info */}
                <div className="lg:col-span-3 flex flex-col justify-center space-y-6 mt-8 lg:mt-0">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                      Md. Shohel Arman
                    </h2>
                    <p className="text-xl text-primary font-semibold mb-1">Assistant Professor & Lab In-charge</p>
                    <p className="text-lg text-muted-foreground">Department of Software Engineering</p>
                  </div>

                  {/* Info Cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Institution</p>
                        <p className="text-sm font-semibold text-foreground">Daffodil International University</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">Since</p>
                        <p className="text-sm font-semibold text-foreground">2017 - Present</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      Data Science Expert
                    </span>
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                      Machine Learning
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium border border-purple-500/20">
                      Research Leader
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Story */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">My Story</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an Assistant Professor and Lab In-charge at Daffodil International University
                  (DIU), with over eight years of experience in teaching, research, and data science.
                  My work focuses on software engineering, machine learning, image processing, and
                  data visualization — areas where technology meets creativity.
                </p>
                <p>
                  I'm passionate about turning theory into real-world impact and give students the skill
                  sets required to succeed in today's technology-driven world. I'm a strong advocate
                  of data-driven learning and make every session an interactive and hands-on learning
                  experience.
                </p>
                <p>
                  My research interests center on machine learning in education, data analytics for
                  business intelligence and new teaching strategies that make learning more effective
                  and enjoyable.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mission Statement</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    "My goal is to contribute to the advancement of data science and inspire the next generation of
                    researchers and engineers to create meaningful impact through technology."
                  </p>

                  {/* Core Values */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Core Values</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Innovation", "Excellence", "Collaboration", "Impact"].map((value, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg border border-border"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic & Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              A timeline of my educational background and career progression
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background md:transform md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            event.type === "education"
                              ? "bg-accent/20 text-accent-foreground"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {event.type === "education" ? "Education" : "Career"}
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{event.title}</h3>
                      <p className="text-primary font-medium mb-3">{event.institution}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
  )
}


export default AboutPage
