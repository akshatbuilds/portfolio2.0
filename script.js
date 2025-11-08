document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for swoosh-in/out animations
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        el.classList.remove('out-view');
      } else {
        // Swoosh away when leaving viewport
        el.classList.remove('in-view');
        el.classList.add('out-view');
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    const setOpen = (open) => {
      hamburger.setAttribute('aria-expanded', String(open));
      mobileMenu.hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });

    // Close when clicking a link inside
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setOpen(false));
    });
  }

  // Lightweight parallax
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parallaxEls = prefersReduced ? [] : Array.from(document.querySelectorAll('.parallax'))
    .map(el => ({ el, speed: parseFloat(el.dataset.speed || '0.05') }));

  let ticking = false;
  const onScroll = () => {
    if (ticking || parallaxEls.length === 0) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      for (const { el, speed } of parallaxEls) {
        const offset = (y * speed);
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      }
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});