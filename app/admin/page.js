"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Simple authentication (in production, use proper auth)
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
    } else {
      alert("Invalid password")
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuth")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">Admin Access</h1>
              <p className="text-muted-foreground">Enter password to access the CMS dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3 font-medium rounded-lg hover:scale-105 transition-all duration-300"
              >
                Login to Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  const stats = [
    { label: "Total Sections", value: "8", icon: "📊" },
    { label: "Publications", value: "2", icon: "📚" },
    { label: "Certifications", value: "10", icon: "🏆" },
    { label: "Testimonials", value: "3", icon: "⭐" },
  ]

  const recentActivity = [
    { action: "Updated Skills section", time: "2 hours ago", type: "edit" },
    { action: "Added new testimonial", time: "1 day ago", type: "add" },
    { action: "Modified experience details", time: "3 days ago", type: "edit" },
    { action: "Published new research paper", time: "1 week ago", type: "add" },
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio content and data</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          {[
            { id: "overview", label: "Overview" },
            { id: "content", label: "Content Management" },
            { id: "publications", label: "Publications" },
            { id: "testimonials", label: "Testimonials" },
            { id: "settings", label: "Settings" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full ${activity.type === "add" ? "bg-green-500" : "bg-blue-500"}`}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-left">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-sm font-medium text-foreground">Add Publication</div>
                  </button>
                  <button className="p-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-left">
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="text-sm font-medium text-foreground">Add Testimonial</div>
                  </button>
                  <button className="p-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-left">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm font-medium text-foreground">Add Certificate</div>
                  </button>
                  <button className="p-4 bg-background border border-border rounded-lg hover:bg-muted transition-colors text-left">
                    <div className="text-2xl mb-2">💼</div>
                    <div className="text-sm font-medium text-foreground">Update Experience</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Content Sections</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Hero Section", status: "Active", lastUpdated: "2 days ago" },
                    { name: "About", status: "Active", lastUpdated: "1 week ago" },
                    { name: "Skills", status: "Active", lastUpdated: "3 days ago" },
                    { name: "Experience", status: "Active", lastUpdated: "1 day ago" },
                    { name: "Volunteering", status: "Active", lastUpdated: "5 days ago" },
                    { name: "Publications", status: "Active", lastUpdated: "1 week ago" },
                  ].map((section, index) => (
                    <div key={index} className="p-4 bg-background border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{section.name}</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-200">
                          {section.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Updated {section.lastUpdated}</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded hover:bg-primary/90 transition-colors">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded hover:bg-muted/80 transition-colors">
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "publications" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Publications Management</h3>
                <button className="btn-primary px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  Add New Publication
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Machine Learning Approaches in Educational Data Mining",
                    status: "Under Review",
                    year: "2023",
                    venue: "International Conference on Educational Technology",
                  },
                  {
                    title: "Data Visualization Techniques for Business Intelligence",
                    status: "In Preparation",
                    year: "2023",
                    venue: "Journal of Data Science Applications",
                  },
                ].map((pub, index) => (
                  <div key={index} className="p-4 bg-background border border-border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{pub.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pub.venue} ({pub.year})
                        </p>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            pub.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {pub.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded hover:bg-primary/90 transition-colors">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-destructive text-destructive-foreground text-xs rounded hover:bg-destructive/90 transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "testimonials" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Testimonials Management</h3>
                <button className="btn-primary px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  Add New Testimonial
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Dr. Sarah Johnson", role: "Department Head", rating: 5 },
                  { name: "Prof. Michael Chen", role: "Research Director", rating: 5 },
                  { name: "Ahmed Rahman", role: "Former Student", rating: 5 },
                ].map((testimonial, index) => (
                  <div key={index} className="p-4 bg-background border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded hover:bg-primary/90 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-destructive text-destructive-foreground text-xs rounded hover:bg-destructive/90 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Site Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Site Title</label>
                  <input
                    type="text"
                    defaultValue="Md. Shohel Arman - Portfolio"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="shohel.arman@diu.edu.bd"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    defaultValue="https://linkedin.com/in/shohel-arman"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button className="btn-primary px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
    
