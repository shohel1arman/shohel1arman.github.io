import { Inter } from "next/font/google"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Md. Shohel Arman - Assistant Professor & Data Science Researcher",
  description:
    "Portfolio of Md. Shohel Arman, Assistant Professor at Daffodil International University, specializing in data science, machine learning, and education.",
  keywords: "data science, machine learning, education, research, assistant professor, DIU",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
