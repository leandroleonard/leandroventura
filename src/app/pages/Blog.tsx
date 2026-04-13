import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    slug: "dependency-injection-is-not-framework-feature",
    title: "Dependency Injection Não é uma Feature de Framework",
    excerpt: "Um conceito de design que existe há décadas e que você pode usar até em PHP puro.",
    date: "13 Abr 2026",
    readTime: "7 min",
    category: "PHP & Arquitetura",
  },
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-32 max-w-4xl mx-auto">
      <motion.h1 
        className="text-5xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t("blog.title")}
      </motion.h1>
      <p className="text-xl text-muted-foreground mb-16">
        {t("blog.subtitle")}
      </p>

      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <motion.article
            key={post.slug}
            className="group border border-border bg-background rounded-2xl p-8 hover:border-primary/50 transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" /> {post.category}
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground mb-8 line-clamp-3">
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Ler artigo completo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}