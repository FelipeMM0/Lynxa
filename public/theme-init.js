(function () {
  try {
    const storage = localStorage.getItem('lynxa-theme')
    const theme = JSON.parse(storage)?.state?.theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  } catch (_) { }
})()
