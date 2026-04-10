import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Terminal, Database, Cpu, Network } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [isDark, setIsDark] = useState(true);

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
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Terminal-inspired background */}
        <div className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.015]"}`}>
          <pre className="text-[10px] text-foreground leading-[1.2] whitespace-pre overflow-hidden">
            {`const buildSystem = async () => {
  return {
    architecture: "scalable",
    performance: "optimized",
    reliability: "high"
  };
};

async function processQueue(tasks) {
  await Promise.all(
    tasks.map(task => task.execute())
  );
}

class DistributedSystem {
  constructor(nodes) {
    this.nodes = nodes;
    this.loadBalancer = new LoadBalancer();
  }
}`.repeat(50)}
          </pre>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-7xl tracking-tight mb-6" style={{ fontWeight: 600, fontSize: '4.5rem', lineHeight: 1.1 }}>
              Leandro Ventura
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-2xl text-muted-foreground mb-4" style={{ fontSize: '1.5rem' }}>
              Software Engineer | Backend & High-Performance Systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12" style={{ fontSize: '1.25rem' }}>
              I build scalable systems, APIs, and intelligent solutions powered by AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              style={{ borderRadius: '0.5rem' }}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border hover:bg-accent transition-colors"
              style={{ borderRadius: '0.5rem' }}
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-12" style={{ fontWeight: 600, fontSize: '2.5rem' }}>About</h2>
            <div className="space-y-6 text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              <p>
                Backend-focused Software Engineer with experience in PHP, Python, and modern JavaScript ecosystems.
                I specialize in building systems that scale, perform, and deliver value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col items-start">
                  <Cpu className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    Performance-First
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    Optimized systems built for speed and efficiency at scale.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <Network className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    Distributed Systems
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    Experience with message queues, async processing, and microservices.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <Terminal className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    Problem Solver
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    Strong analytical mindset focused on elegant, maintainable solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-16" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "Python", "JavaScript", "TypeScript", "C++"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border"
                      style={{ fontSize: '0.938rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["FastAPI", "Laravel", "CodeIgniter", "React", "Node.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border"
                      style={{ fontSize: '0.938rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Systems & Architecture
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["REST APIs", "Microservices", "Async Processing", "Message Queues"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border"
                      style={{ fontSize: '0.938rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["PostgreSQL", "MySQL", "Redis"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border"
                      style={{ fontSize: '0.938rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  DevOps
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Docker", "Linux", "Nginx"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background border border-border"
                      style={{ fontSize: '0.938rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Featured Project</h2>
            <p className="text-muted-foreground mb-16" style={{ fontSize: '1.125rem' }}>
              End-to-end system architecture and AI integration
            </p>

            <motion.div
              className="border border-border bg-secondary/20 p-12 hover:border-foreground/20 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl mb-6" style={{ fontWeight: 600, fontSize: '2rem' }}>
                    Deepfake Detection System
                  </h3>
                  <p className="text-muted-foreground mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                    End-to-end AI system for detecting deepfakes in images and videos. Built with scalability
                    and performance as core requirements, handling asynchronous processing and distributed workloads.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-foreground mb-4" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      Key Features
                    </h4>
                    <ul className="space-y-3 text-muted-foreground" style={{ fontSize: '0.938rem' }}>
                      <li className="flex items-start gap-3">
                        <span className="text-foreground mt-1">•</span>
                        <span>Asynchronous processing pipeline with Celery and Redis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-foreground mt-1">•</span>
                        <span>Scalable architecture supporting concurrent analysis requests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-foreground mt-1">•</span>
                        <span>EfficientNet-based AI model integration for real-time detection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-foreground mt-1">•</span>
                        <span>REST API built with FastAPI for high-throughput operations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-4" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["FastAPI", "Celery", "Redis", "PostgreSQL", "EfficientNet", "Docker"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background border border-border"
                          style={{ fontSize: '0.875rem' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full h-full min-h-[400px] bg-background border border-border flex items-center justify-center p-8">
                    <div className="space-y-6 w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-secondary border border-border flex items-center justify-center">
                          <Terminal className="w-8 h-8" />
                        </div>
                        <div className="flex-1 h-4 bg-secondary"></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-secondary border border-border flex items-center justify-center">
                          <Database className="w-8 h-8" />
                        </div>
                        <div className="flex-1 h-4 bg-secondary"></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-secondary border border-border flex items-center justify-center">
                          <Cpu className="w-8 h-8" />
                        </div>
                        <div className="flex-1 h-4 bg-secondary"></div>
                      </div>
                      <div className="text-center text-muted-foreground mt-8" style={{ fontSize: '0.875rem' }}>
                        System Architecture Diagram
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-16" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Other Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="border border-border bg-background p-8 hover:border-foreground/20 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Micro SaaS Platform
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Trend tracking system for content creators. Real-time analytics and insights
                  for social media performance optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Vue.js", "MySQL", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-border"
                      style={{ fontSize: '0.813rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border border-border bg-background p-8 hover:border-foreground/20 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Enterprise Web Systems
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Custom web platforms and APIs for enterprise clients. Focus on performance,
                  security, and maintainable architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "CodeIgniter", "PostgreSQL", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-border"
                      style={{ fontSize: '0.813rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border border-border bg-background p-8 hover:border-foreground/20 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  API Integration Platform
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  RESTful API gateway connecting multiple third-party services. Implements
                  rate limiting, caching, and error handling strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "Redis", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-border"
                      style={{ fontSize: '0.813rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="border border-border bg-background p-8 hover:border-foreground/20 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Data Processing Pipeline
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  High-throughput data processing system handling millions of records.
                  Batch processing with robust error recovery and monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Celery", "PostgreSQL", "RabbitMQ"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-border"
                      style={{ fontSize: '0.813rem' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Approach Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-16" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              How I Build Systems
            </h2>

            <div className="space-y-12">
              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Clean Architecture
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Separation of concerns, modular design, and maintainable code that scales with team and product growth.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Performance-First Mindset
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Optimization at every layer—from database queries to caching strategies to algorithm selection.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Scalable Backend Design
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Systems built to handle growth—horizontal scaling, load balancing, and distributed architecture patterns.
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  Async & Distributed Processing
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Leveraging message queues, worker pools, and event-driven architecture for responsive, resilient systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl mb-6" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              Let's Build Something Impactful
            </h2>
            <p className="text-muted-foreground mb-12 text-xl" style={{ fontSize: '1.25rem' }}>
              Open to new opportunities and collaborations
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:leandroventur19@gmail.com"
                className="flex items-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
                style={{ borderRadius: '0.5rem' }}
              >
                <Mail className="w-5 h-5" />
                <span>leandroventur19@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/l-ventura/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
                style={{ borderRadius: '0.5rem' }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/leandroleonard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
                style={{ borderRadius: '0.5rem' }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground" style={{ fontSize: '0.938rem' }}>
          <p>© 2026 Leandro Ventura. Built with precision and purpose.</p>
        </div>
      </footer>
    </div>
  );
}
