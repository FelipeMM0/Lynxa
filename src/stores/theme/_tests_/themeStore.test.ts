import { useThemeStore } from '@/stores/theme/themeStore'
import { applyThemeClass } from '@/utils/themeUtils'

jest.mock('@/utils/themeUtils', () => ({
  applyThemeClass: jest.fn(),
}))

describe('useThemeStore', () => {
  beforeEach(() => {
    useThemeStore.setState({ theme: 'light' })
    jest.clearAllMocks()
  })

  it('inicia com theme "light"', () => {
    expect(useThemeStore.getState().theme).toBe('light')
  })

  it('toggleTheme alterna o tema e chama applyThemeClass', () => {
    useThemeStore.getState().toggleTheme()
    expect(useThemeStore.getState().theme).toBe('dark')
    expect(applyThemeClass).toHaveBeenCalledWith('dark')
  })

  it('setTheme define corretamente e chama applyThemeClass', () => {
    useThemeStore.getState().setTheme('dark')
    expect(useThemeStore.getState().theme).toBe('dark')
    expect(applyThemeClass).toHaveBeenCalledWith('dark')
  })
})
