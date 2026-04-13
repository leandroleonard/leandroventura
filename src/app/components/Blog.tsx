import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "otimizacao-queries-laravel",
    title: "Como otimizar queries no Laravel e reduzir tempo de resposta em 80%",
    excerpt: "Técnicas práticas de indexação, eager loading e query caching que apliquei em sistemas de alto volume.",
    date: "12 Abr 2026",
    readTime: "8 min",
    category: "Backend"
  },
  {
    slug: "deepfake-detection-system",
    title: "Arquitetura completa do meu sistema de deteção de Deepfakes",
    excerpt: "Como construí um pipeline assíncrono escalável com FastAPI, Celery, Redis e EfficientNet.",
    date: "05 Mar 2026",
    readTime: "12 min",
    category: "AI & Systems"
  },
  // Adiciona mais artigos aqui...
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
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

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.slug}
            className="border border-border bg-background p-8 rounded-2xl hover:border-primary/50 transition-all group"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs">
                {post.category}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Ler artigo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}