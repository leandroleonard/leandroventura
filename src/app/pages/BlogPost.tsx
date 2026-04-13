import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as 'en' | 'pt';


  const [content, setContent] = useState<string>("");
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);

        const mdModule = await import(`../content/blog/${slug}/${lang}.md?raw`);
        const rawMarkdown = mdModule.default;


        const parts = rawMarkdown.split('---');
        if (parts.length < 3) {
          throw new Error("Formato de markdown inválido");
        }

        const frontmatter = parts[1].trim();
        const body = parts.slice(2).join('---').trim();

        const title = frontmatter.match(/title:\s*(.+)/)?.[1] || "Sem título";
        const date = frontmatter.match(/date:\s*"(.+)"/)?.[1] || "";
        const readTime = frontmatter.match(/readTime:\s*"(.+)"/)?.[1] || "";
        const category = frontmatter.match(/category:\s*"(.+)"/)?.[1] || "";

        setMetadata({ title, date, readTime, category });
        setContent(body);
      } catch (err) {
        console.error("Erro ao carregar o post:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, lang]);

  if (loading) {
    return <div className="pt-32 text-center"> {t("loading")}</div>;
  }

  if (!metadata || !content) {
    return <div className="pt-32 text-center">{t("post-not-found")}</div>;
  }

  return (
    <div className="pt-24 pb-32 max-w-3xl mx-auto">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-10"
      >
        <ArrowLeft className="w-5 h-5" /> {t("go-back")}
      </Link>

      <div className="mb-12">
        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <span>{metadata.date}</span>
          <span>•</span>
          <span>{metadata.readTime}</span>
          <span>•</span>
          <span>{metadata.category}</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight">{metadata.title}</h1>
      </div>

      <article className="prose dark:prose-invert max-w-none text-[1.05rem] leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}