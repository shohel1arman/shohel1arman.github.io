const AboutPage = () => {
  const timelineEvents = [
    {
      year: "2012-2015",
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University (DIU)",
      description:
        "Graduated with CGPA: 3.86/4.00. Developed strong foundation in software engineering principles and programming.",
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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dedicated educator and researcher with a passion for advancing data science and inspiring the next
            generation of engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Profile Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl p-8">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Md. Shohel Arman</h2>
                <p className="text-primary font-medium mb-4">Assistant Professor & Lab In-charge</p>
                <p className="text-muted-foreground">Daffodil International University</p>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am an Assistant Professor and Lab In-charge at Daffodil International University (DIU), with over
                    eight years of experience in teaching, research, and data science. My expertise spans software
                    engineering, machine learning, image processing, and data visualization.
                  </p>
                  <p>
                    Throughout my academic journey, I have been passionate about bridging the gap between theoretical
                    knowledge and practical applications. I believe in the power of data-driven decision making and
                    strive to equip my students with the skills needed to excel in today's technology-driven world.
                  </p>
                  <p>
                    My research interests include machine learning applications in education, data analytics for
                    business intelligence, and innovative teaching methodologies that enhance student learning outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Mission Statement</h4>
                <p className="text-muted-foreground italic">
                  "My goal is to contribute to the advancement of data science and inspire the next generation of
                  researchers and engineers to create meaningful impact through technology."
                </p>
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
    </div>
  )
}

export default AboutPage
