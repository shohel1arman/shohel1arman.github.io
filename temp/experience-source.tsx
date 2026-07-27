const ExperiencePage = () => {
  const experiences = [
    {
      title: "Assistant Professor & Lab In-charge",
      company: "Daffodil International University (DIU)",
      period: "August 2022 - Present",
      type: "Academic",
      responsibilities: [
        "Leading research initiatives in data science and machine learning",
        "Managing computer science laboratory operations and equipment",
        "Developing curriculum for undergraduate and graduate programs",
        "Supervising student research projects and thesis work",
        "Collaborating with industry partners on applied research projects",
      ],
      skills: ["Research Leadership", "Curriculum Development", "Lab Management", "Student Mentoring"],
    },
    {
      title: "Senior Lecturer",
      company: "Daffodil International University (DIU)",
      period: "May 2020 - August 2022",
      type: "Academic",
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
      period: "September 2017 - April 2020",
      type: "Academic",
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
      title: "Technical Writer",
      company: "IEC Ltd.",
      period: "2016",
      type: "Industry",
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
      responsibilities: [
        "Conducted Android development training programs",
        "Designed training curriculum and materials",
        "Mentored participants in mobile app development",
        "Evaluated trainee progress and provided feedback",
        "Organized hands-on workshops and coding sessions",
      ],
      skills: ["Android Development", "Training Delivery", "Curriculum Design", "Mentoring"],
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case "Academic":
        return "bg-primary/20 text-primary"
      case "Research":
        return "bg-accent/20 text-accent-foreground"
      case "Industry":
        return "bg-secondary/20 text-secondary-foreground"
      case "Training":
        return "bg-muted/20 text-muted-foreground"
      default:
        return "bg-muted/20 text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive overview of my academic and professional journey, showcasing growth from research associate
            to assistant professor.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground font-medium">{exp.period}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Responsibilities */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progression Summary */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Career Progression Summary</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Years in Academia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Academic Positions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Industry Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage
