// utils per init del tema

export function initDarkMode(): void {
  const stored = localStorage.getItem('gaia-theme');
  // lettura preferenza sist operativo
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleDarkMode(): void {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('gaia-theme', isDark ? 'dark' : 'light');
}

export function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}