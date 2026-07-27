const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      description: "Primary areas of expertise with LinkedIn endorsements",
      skills: [
        { name: "Machine Learning", level: 95, endorsed: true },
        { name: "Data Analysis", level: 92, endorsed: true },
        { name: "Research", level: 90, endorsed: true },
        { name: "Teaching", level: 88, endorsed: true },
        { name: "Deep Learning", level: 85, endorsed: false },
        { name: "Data Visualization", level: 87, endorsed: false },
      ],
    },
    {
      title: "Technical Tools & Technologies",
      description: "Software and programming tools used in research and teaching",
      skills: [
        { name: "Python", level: 90, endorsed: false },
        { name: "Power BI", level: 85, endorsed: false },
        { name: "Tableau", level: 82, endorsed: false },
        { name: "TensorFlow", level: 80, endorsed: false },
        { name: "NumPy & Pandas", level: 88, endorsed: false },
        { name: "Excel", level: 85, endorsed: false },
        { name: "Git", level: 75, endorsed: false },
        { name: "SQL", level: 80, endorsed: false },
      ],
    },
    {
      title: "Academic & Professional Skills",
      description: "Soft skills developed through years of academic and professional experience",
      skills: [
        { name: "Leadership", level: 85, endorsed: false },
        { name: "Mentorship", level: 90, endorsed: false },
        { name: "Academic Writing", level: 88, endorsed: false },
        { name: "Public Speaking", level: 82, endorsed: false },
        { name: "Curriculum Development", level: 85, endorsed: false },
        { name: "Project Management", level: 80, endorsed: false },
      ],
    },
    {
      title: "Research Areas",
      description: "Specialized research interests and ongoing projects",
      skills: [
        { name: "Data Science in Education", level: 90, endorsed: false },
        { name: "Image Processing", level: 85, endorsed: false },
        { name: "Business Data Analytics", level: 88, endorsed: false },
        { name: "Educational Technology", level: 82, endorsed: false },
        { name: "Machine Learning Applications", level: 87, endorsed: false },
      ],
    },
  ]

  const achievements = [
    {
      title: "15+ LinkedIn Endorsements",
      description: "Professional recognition for core skills",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      title: "10+ Professional Certificates",
      description: "Continuous learning and skill development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "8+ Years Teaching Experience",
      description: "Extensive experience in academic instruction",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive overview of my technical skills, research capabilities, and professional competencies
            developed over years of academic and industry experience.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                        {skill.endorsed && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Endorsed</span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Continuous Learning & Development</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              I believe in lifelong learning and continuously update my skills to stay current with the latest
              developments in data science, machine learning, and educational technology. My commitment to professional
              development is reflected in my ongoing pursuit of certifications and active participation in research
              communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
