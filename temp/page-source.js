import Link from "next/link"
import ScrollAnimation from "../components/scroll-animation"

const HomePage = () => {
  const highlights = [
    {
      number: "8+",
      label: "Years in Teaching & Research",
    },
    {
      number: "15+",
      label: "LinkedIn Endorsements",
    },
    {
      number: "4",
      label: "Academic Positions at DIU",
    },
    {
      number: "10+",
      label: "Professional Certificates",
    },
  ]

  const expertise = ["Machine Learning", "Data Analysis", "Deep Learning", "Data Visualization", "Research", "Teaching"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgb(var(--primary)) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgb(var(--accent)) 0%, transparent 50%)`,
              backgroundSize: "400px 400px",
            }}
          />
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div
            className="absolute top-40 right-32 w-3 h-3 bg-accent/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-accent/30 rounded-full animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
                  <span className="text-gradient">Md. Shohel Arman</span>
                </h1>
                <h2
                  className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  Assistant Professor | Data Science Researcher | Educator
                </h2>
                <p
                  className="text-lg text-muted-foreground text-pretty max-w-2xl animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Passionate about teaching, research, and advancing data science for real-world impact. Over eight
                  years of experience in academia, specializing in machine learning, data analysis, and educational
                  innovation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <Link
                  href="/experience"
                  className="btn-primary inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg hover:scale-105 transition-all duration-300"
                >
                  View My Work
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full animate-scale-in hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image Placeholder */}
            <div
              className="flex justify-center lg:justify-end animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border hover-lift animate-glow">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Photo</p>
                  </div>
                </div>
                {/* Enhanced decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/10 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <ScrollAnimation>
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A track record of dedication to education, research, and professional development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <ScrollAnimation key={item.label} delay={index * 100} className="text-center">
                  <div className="card-hover bg-background border border-border rounded-xl p-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 text-gradient">{item.number}</div>
                    <div className="text-muted-foreground text-sm md:text-base">{item.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Current Role Section */}
      <ScrollAnimation>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Current Position</h2>
              <div className="card-hover bg-card border border-border rounded-2xl p-8 md:p-12 hover-glow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Assistant Professor & Lab In-charge</h3>
                  <p className="text-lg text-primary font-medium">Daffodil International University (DIU)</p>
                  <p className="text-muted-foreground mt-2">August 2022 - Present</p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Leading research initiatives in data science and machine learning while mentoring the next generation
                  of software engineers. Responsible for curriculum development, laboratory management, and fostering
                  innovation in educational technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default HomePage
