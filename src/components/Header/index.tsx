import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/stores/theme/themeStore'

export function Header() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <h1 className="text-xl font-bold tracking-tight">Lynxa</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md hover:bg-muted transition"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  )
}
