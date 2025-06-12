import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { applyThemeClass } from '@/utils/themeUtils'
import { ThemeMode, ThemeStore } from './theme.types'

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',

      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark'
        set({ theme: newTheme })
        applyThemeClass(newTheme)
      },

      setTheme: (theme: ThemeMode) => {
        set({ theme })
        applyThemeClass(theme)
      },
    }),
    {
      name: 'lynxa-theme',
    }
  )
)
