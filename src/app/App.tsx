import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Terminal, Home } from "lucide-react";

import { useTranslation } from "react-i18next";

import { ThemeToggle } from "./components/ThemeToggle";
import LanguageSwitcher from "./components/LanguageSwitcher";

import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
// import BlogPost from "./components/BlogPost";

export default function App() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-background text-foreground transition-colors duration-300`}>
      {/* Controls fixos */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <Terminal className="w-6 h-6" />
            Leandro Ventura
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> {t("nav.home")}
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors">
              {t("nav.blog")}
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        {/* Página Inicial (Landing Page) */}
        <Route path="/" element={<HomePage isDark={isDark} />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        {/*<Route path="/blog/:slug" element={<BlogPost />} /> */}
      </Routes>
    </div>
  );
}