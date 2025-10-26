// Add 'active' class to the current page's link
document.querySelectorAll('.nav-links').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});