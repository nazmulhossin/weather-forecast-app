import { useTheme } from "@/app/providers/ThemeProvider"
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className="p-2 rounded-full transition-transform hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-90 cursor-pointer" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      {theme === "light" ? (
        <Moon className="size-6" />
      ) : (
        <Sun className="size-6 text-gray-300 hover:text-gray-200" />
      )}
    </button>
  )
}

export default ThemeToggler