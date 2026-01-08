const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

(function(){
  const nav = document.querySelector('#site-header .navbar');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 18) nav.classList.add('shadow-sm','navbar-scrolled');
    else nav.classList.remove('shadow-sm','navbar-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', onScroll);
})();