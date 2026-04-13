import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Terminal, Database, Cpu, Network } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  const { t } = useTranslation();
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
      {/* Fixed Header Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

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
              {t("hero.role")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12" style={{ fontSize: '1.25rem' }}>
              {t("hero.description")}
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
              {t("hero.buttons.projects")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border hover:bg-accent transition-colors"
              style={{ borderRadius: '0.5rem' }}
            >
              {t("hero.buttons.contact")}
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
            <h2 className="text-4xl mb-12" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              {t("about.title")}
            </h2>
            <div className="space-y-6 text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              <p>{t("about.description")}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col items-start">
                  <Cpu className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    {t("about.cards.performance.title")}
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    {t("about.cards.performance.description")}
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <Network className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    {t("about.cards.distributed.title")}
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    {t("about.cards.distributed.description")}
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <Terminal className="w-8 h-8 mb-4 text-foreground" />
                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    {t("about.cards.problem_solver.title")}
                  </h3>
                  <p style={{ fontSize: '0.938rem' }}>
                    {t("about.cards.problem_solver.description")}
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
            <h2 className="text-4xl mb-16" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              {t("skills.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Languages */}
              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {t("skills.languages.title")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t("skills.languages.items", { returnObjects: true }).map((skill: string) => (
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

              {/* Frameworks & Tools */}
              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {t("skills.frameworks.title")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t("skills.frameworks.items", { returnObjects: true }).map((skill: string) => (
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

              {/* Systems & Architecture */}
              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {t("skills.systems.title")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t("skills.systems.items", { returnObjects: true }).map((skill: string) => (
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

              {/* Databases */}
              <div>
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {t("skills.databases.title")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t("skills.databases.items", { returnObjects: true }).map((skill: string) => (
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

              {/* DevOps - spans 2 columns */}
              <div className="md:col-span-2">
                <h3 className="text-xl mb-6 text-muted-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  {t("skills.devops.title")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t("skills.devops.items", { returnObjects: true }).map((skill: string) => (
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
            <h2 className="text-4xl mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              {t("projects.featured.title")}
            </h2>
            <p className="text-muted-foreground mb-16" style={{ fontSize: '1.125rem' }}>
              {t("projects.featured.subtitle")}
            </p>

            <motion.div
              className="border border-border bg-secondary/20 p-12 hover:border-foreground/20 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl mb-6" style={{ fontWeight: 600, fontSize: '2rem' }}>
                    {t("projects.featured.name")}
                  </h3>
                  <p className="text-muted-foreground mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                    {t("projects.featured.description")}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-foreground mb-4" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      {t("projects.featured.key_features")}
                    </h4>
                    <ul className="space-y-3 text-muted-foreground" style={{ fontSize: '0.938rem' }}>
                      {t("projects.featured.features", { returnObjects: true }).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-4" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      {t("projects.featured.tech_stack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {t("projects.featured.technologies", { returnObjects: true }).map((tech: string) => (
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
            <h2 className="text-4xl mb-16" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
              {t("projects.other.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="border border-border bg-background p-8 hover:border-foreground/20 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  {t("projects.other.micro_saas.title")}
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  {t("projects.other.micro_saas.description")}
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
                  {t("projects.other.enterprise.title")}
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  {t("projects.other.enterprise.description")}
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
                  {t("projects.other.api_integration.title")}
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  {t("projects.other.api_integration.description")}
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
                  {t("projects.other.data_pipeline.title")}
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  {t("projects.other.data_pipeline.description")}
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
              {t("engineering.title")}
            </h2>

            <div className="space-y-12">
              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  {t("engineering.clean_architecture.title")}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {t("engineering.clean_architecture.description")}
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  {t("engineering.performance.title")}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {t("engineering.performance.description")}
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  {t("engineering.scalable.title")}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {t("engineering.scalable.description")}
                </p>
              </div>

              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600, fontSize: '1.5rem' }}>
                  {t("engineering.async.title")}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {t("engineering.async.description")}
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
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground mb-12 text-xl" style={{ fontSize: '1.25rem' }}>
              {t("contact.subtitle")}
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
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}