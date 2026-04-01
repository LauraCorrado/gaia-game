export function loadGoogleFonts() {
  if (document.getElementById('google-fonts')) return

  // Preconnect 1
  const preconnect1 = document.createElement('link')
  preconnect1.rel = 'preconnect'
  preconnect1.href = 'https://fonts.googleapis.com'

  // Preconnect 2
  const preconnect2 = document.createElement('link')
  preconnect2.rel = 'preconnect'
  preconnect2.href = 'https://fonts.gstatic.com'
  preconnect2.crossOrigin = 'anonymous'

  // Font stylesheet
  const link = document.createElement('link')
  link.id = 'google-fonts'
  link.rel = 'stylesheet'
  link.href =
    'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,400&display=swap'

  document.head.append(preconnect1, preconnect2, link)
}