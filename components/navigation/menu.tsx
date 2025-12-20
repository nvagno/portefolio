import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  Home,
  BriefcaseBusiness,
  Contact,
  Code,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useIntl } from "react-intl";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "../ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function NavigationMenuSection({
  setLocale,
}: {
  setLocale: (lc: "en" | "fr") => void;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const intl = useIntl();
  const isMobile = useMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const navItems = [
    {
      id: "home",
      label: intl.formatMessage({ id: "home" }),
      icon: <Home />,
      link: "#home",
    },
    {
      id: "works",
      label: intl.formatMessage({ id: "works" }),
      icon: <BriefcaseBusiness />,
      link: "#works",
    },
    {
      id: "portfolio",
      label: intl.formatMessage({ id: "portefolio" }),
      icon: <Code />,
      link: "#portefolio",
    },
    {
      id: "contacts",
      label: intl.formatMessage({ id: "contacts" }),
      icon: <Contact />,
      link: "#contacts",
    },
  ];

  const DesktopNavigation = () => (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center p-4 lg:p-6">
      <div
        className="absolute inset-0 backdrop-blur-md bg-background/70 dark:bg-background/80"
        aria-hidden="true"
      />

      <div className="relative flex items-center flex-1 lg:flex-none lg:mx-12">
        <img className="w-10 h-10 lg:w-12 lg:h-12" src="logo.png" alt="Logo" />
        <strong className="ml-3 text-lg lg:text-xl font-bold">#NYHASINA</strong>
      </div>

      <div className="relative hidden lg:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8 xl:gap-10">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <Button
                  variant="ghost"
                  className="text-base font-medium hover:bg-primary/10 hover:backdrop-blur-sm transition-all"
                >
                  <a href={item.link} className="flex items-center gap-1">
                    {item.icon}
                    {item.label}
                  </a>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="relative flex items-center justify-end flex-1 lg:flex-none lg:mx-12 gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-full backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:bg-primary/10 hover:backdrop-blur-md transition-all"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        <div className="hidden lg:flex gap-2">
          <Button
            size="icon"
            variant={intl.locale === "en" ? "default" : "outline"}
            onClick={() => setLocale("en")}
            className="rounded-full backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:backdrop-blur-md transition-all"
            aria-label="Switch to English"
          >
            🇺🇸
          </Button>
          <Button
            size="icon"
            variant={intl.locale === "fr" ? "default" : "outline"}
            onClick={() => setLocale("fr")}
            className="rounded-full backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:backdrop-blur-md transition-all"
            aria-label="Switch to French"
          >
            🇫🇷
          </Button>
        </div>
      </div>
    </header>
  );

  const MobileNavigation = () => (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-between p-4">
      {/* Blurred background for mobile header */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-background/70 dark:bg-background/80"
        aria-hidden="true"
      />

      <div className="relative flex items-center">
        <img className="w-10 h-10" src="logo.png" alt="Logo" />
        <strong className="ml-3 text-lg font-bold">#NYHASINA</strong>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:bg-primary/10 hover:backdrop-blur-md transition-all"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[85vw] p-5 sm:w-[350px] backdrop-blur-xl bg-background/90 dark:bg-background/95"
        >
          <SheetTitle></SheetTitle>
          <div className="flex flex-col h-full pt-6">
            <nav className="flex-1">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg py-6 hover:bg-primary/10 hover:backdrop-blur-sm transition-all"
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-6 border-t border-border/50 mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className="rounded-full backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:backdrop-blur-md transition-all"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {intl.formatMessage({
                        id: "language",
                      })}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={intl.locale === "en" ? "default" : "outline"}
                      onClick={() => {
                        setLocale("en");
                      }}
                      className="flex-1 backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:backdrop-blur-md transition-all"
                    >
                      <span className="mr-2">🇺🇸</span>
                    </Button>
                    <Button
                      variant={intl.locale === "fr" ? "default" : "outline"}
                      onClick={() => {
                        setLocale("fr");
                      }}
                      className="flex-1 backdrop-blur-sm bg-background/50 dark:bg-background/60 hover:backdrop-blur-md transition-all"
                    >
                      <span className="mr-2">🇫🇷</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );

  return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
}
