import { Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})
// Add favicon link using Next.js metadata
export const metadata = {
  title: "Md. Shohel Arman - Assistant Professor & Data Science Researcher",
  description:
    "Portfolio of Md. Shohel Arman, Assistant Professor at Daffodil International University, specializing in data science, machine learning, and education.",
  keywords:
    "data science, machine learning, education, research, assistant professor, DIU",
  icons: {
    icon: "/fav2.jpg",
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme - runs before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const activeTheme = theme || systemTheme;
                  
                  // Add loading class to prevent transitions
                  document.documentElement.classList.add('loading');
                  
                  // Apply theme immediately
                  if (activeTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  
                  // Remove loading class after DOM is ready
                  setTimeout(() => {
                    document.documentElement.classList.remove('loading');
                  }, 0);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}