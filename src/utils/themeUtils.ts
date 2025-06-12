import type { ThemeMode } from '@/stores/theme/theme.types'

export function applyThemeClass(theme: ThemeMode) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}
