"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Palette } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const t = useTranslations("Theme");

  const { theme, toggleTheme } = useThemeStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={t("switchLabel")}
      title={theme === "navy" ? t("pink") : t("navy")}
      key={theme}
      className="animate-theme-pulse"
    >
      <Palette className="h-5 w-5" />
    </Button>
  );
}
