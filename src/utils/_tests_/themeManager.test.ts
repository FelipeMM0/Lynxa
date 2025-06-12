import { applyThemeClass } from '../themeUtils'

describe('applyThemeClass', () => {
  it('adds dark class to html when theme is dark', () => {
    document.documentElement.classList.remove('dark')
    applyThemeClass('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes dark class when theme is light', () => {
    document.documentElement.classList.add('dark')
    applyThemeClass('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
