import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function NavigationMenu() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    console.log(resolvedTheme);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform" />
        ) : (
          <Moon className="h-5 w-5 transition-transform" />
        )}
      </Button>
    </div>
  );
}
