export type ThemeMode = 'light' | 'dark'

export interface ThemeStore {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}
