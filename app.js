const toggle = document.getElementById('navToggle');
  const links  = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
 
  // Scroll: navbar shadow
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', scrollY > 30);
  });
 
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      links.classList.remove('open');
    });
  });