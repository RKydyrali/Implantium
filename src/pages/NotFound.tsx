import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="flex-1 flex items-center justify-center pt-32 pb-24">
      <div className="container mx-auto px-4 text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">{t.common.notFoundTitle}</h2>
        <p className="text-muted-foreground mb-8">
          {t.common.notFoundText}
        </p>
        <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
          <Link to="/">{t.common.backToHome}</Link>
        </Button>
      </div>
    </main>
  );
}
