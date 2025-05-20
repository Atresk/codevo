export function applyPreferredTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.className = prefersDark ? 'dark' : 'light';
}