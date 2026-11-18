const SELECTOR = '[data-reveal]';
const VISIBLE = 'visible';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealAll(nodes: NodeListOf<Element> | Element[]): void {
  nodes.forEach((el) => {
    el.setAttribute('data-reveal', VISIBLE);
  });
}

function initRevealOnScroll(): void {
  const nodes = document.querySelectorAll(SELECTOR);
  if (!nodes.length) return;

  if (prefersReducedMotion()) {
    revealAll(nodes);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute('data-reveal', VISIBLE);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  nodes.forEach((el) => {
    if (el.getAttribute('data-reveal') === VISIBLE) return;
    observer.observe(el);
  });
}

initRevealOnScroll();
document.addEventListener('astro:page-load', initRevealOnScroll);
