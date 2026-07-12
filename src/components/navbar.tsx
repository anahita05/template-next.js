import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function Navbar() {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-primary">
          {t("brand")}
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            {t("home")}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            {t("about")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
