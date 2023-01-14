function toggleMenu() {
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav-ul");
  if (menu) {
    if (menu.classList.contains("change")) {
      menu.classList.remove("change");
      nav.classList.remove("visible");
      return;
    }
    menu.classList.add("change");
    nav.classList.add("visible");
  }
}

const testimonialContainer = document.getElementById('testimonials-container');
if (testimonialContainer.scrollWidth > testimonialContainer.clientWidth) {
  console.log('scrollable')
  testimonialContainer.style['-webkit-mask'] = 'linear-gradient(to right, black calc(100% - 150px), transparent)';
}
function onTestimonialScroll() {
  if (testimonialContainer.scrollWidth > testimonialContainer.clientWidth) {
    if (testimonialContainer.scrollLeft + testimonialContainer.clientWidth === testimonialContainer.scrollWidth) {
      testimonialContainer.style['-webkit-mask'] = 'linear-gradient(to left, black calc(100% - 150px), transparent)';
    } else if (testimonialContainer.scrollLeft === 0) {
      testimonialContainer.style['-webkit-mask'] = 'linear-gradient(to right, black calc(100% - 150px), transparent)';
    } else {
      testimonialContainer.style['-webkit-mask-image'] = 'linear-gradient( to right,transparent,black 10%,black 80%,transparent 100%)';
    }
  }
}

testimonialContainer.addEventListener('scroll', onTestimonialScroll);