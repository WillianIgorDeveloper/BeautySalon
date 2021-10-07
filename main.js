/* Menu top Action */
const menu = document.querySelector('#header nav ul')
const linkMenu = document.getElementsByClassName('menu')

for (const links of linkMenu) {
  links.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}

/* Menu top Shadow */
const headerTop = document.getElementById('header')
const headerHeight = headerTop.offsetHeight

function menuTopShadow() {
  if (window.scrollY > headerHeight) {
    headerTop.classList.add('shadow')
  } else {
    headerTop.classList.remove('shadow')
  }
}

/* Swiper */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  keyboard: true,

  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination'
  }
})

/* Back to top button */
const button = document.getElementById('backToTopButton')

function backToTop() {
  if (window.scrollY > 500) {
    button.classList.add('back-to-top-show')
  } else {
    button.classList.remove('back-to-top-show')
  }
}

/* Scrollreveal */
ScrollReveal({ distance: '2rem', reset: true })
ScrollReveal().reveal('#home img', { origin: 'right' })
ScrollReveal().reveal('#home .warpper', { origin: 'left' })
ScrollReveal().reveal('#about img', { origin: 'left' })
ScrollReveal().reveal('#about .warpper', { origin: 'right' })
ScrollReveal().reveal('#services .warpper', { origin: 'top' })
ScrollReveal().reveal('#services .cards', { origin: 'bottom' })
ScrollReveal().reveal('#depositions h2', { origin: 'top' })
ScrollReveal().reveal('#depositions .swiper', { origin: 'bottom' })
ScrollReveal().reveal('#contact .warpper', { origin: 'left' })
ScrollReveal().reveal('#contact ul', { origin: 'right' })

/* Activate menu at current section */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Eventos da janela */
window.addEventListener('scroll', function () {
  menuTopShadow()
  backToTop()
  activateMenuAtCurrentSection()
})
