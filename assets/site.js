(() => {
  const hdr = document.getElementById('hdr'), burger = document.getElementById('burger'),
        drawer = document.getElementById('drawer'), bico = document.getElementById('burger-ico');
  const setDrawer = (open) => {
    drawer.dataset.open = open ? 'true' : 'false';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    bico.firstElementChild.setAttribute('href', open ? '#i-x' : '#i-menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setDrawer(drawer.dataset.open !== 'true'));
  drawer.addEventListener('click', (e) => { if (e.target.closest('a')) setDrawer(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });
  const mq = matchMedia('(min-width:1081px)');
  mq.addEventListener('change', (e) => { if (e.matches) setDrawer(false); });

  const stick = () => hdr.classList.toggle('is-stuck', scrollY > 12);
  stick(); addEventListener('scroll', stick, { passive: true });

  // smooth anchor scroll with sticky-header offset
  document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    const top = el.id === 'topo' ? 0 : el.getBoundingClientRect().top + scrollY - 76;
    scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', a.getAttribute('href'));
  }));

  // scroll reveal
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((n) => io.observe(n));

  // active nav link
  const secs = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const spy = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((l) => l.toggleAttribute('aria-current', l.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach((s) => spy.observe(s));

  // contact form — swap in a real endpoint (Formspree/Basin) in the action below
  const form = document.getElementById('form'), sent = document.getElementById('sent');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    form.hidden = true; sent.hidden = false;
  });
  document.getElementById('again').addEventListener('click', () => {
    form.reset(); sent.hidden = true; form.hidden = false;
  });
})();
