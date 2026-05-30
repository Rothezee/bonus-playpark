/** Prefija rutas internas con el base path (p. ej. /bonus-playpark/ en GitHub Pages). */
export function withBase(path: string): string {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const clean = path.startsWith('/') ? path.slice(1) : path;

  if (!clean) {
    return normalizedBase;
  }

  return `${normalizedBase}${clean}`;
}

export function isActiveLink(href: string, currentPath: string): boolean {
  const base = import.meta.env.BASE_URL;
  const target = withBase(href).replace(/\/$/, '');

  if (href === '/') {
    const homePaths = [base.replace(/\/$/, ''), '/', ''];
    return homePaths.includes(currentPath.replace(/\/$/, '')) || currentPath === base;
  }

  return currentPath.startsWith(target);
}
