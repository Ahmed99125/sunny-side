const menu = document.querySelector('.navbar-toggle'),
navList = document.querySelector('.navbar-items'),
btn = document.querySelector('.button');

const changeMobileStatus = () => {
  menu.classList.toggle('active');
  navList.classList.toggle('active');
}

menu.addEventListener('click', changeMobileStatus);

btn.addEventListener('click', () => {
  if (window.innerWidth <= 700) {
    btn.classList.remove('effect');
    changeMobileStatus();
  } else {
    btn.classList.add('effect')
  }
});

const closeMenu = e => {
  if (window.innerWidth <= 700) {
    if (e.target.classList.contains('item-links')) {
      changeMobileStatus();
    }
  }
}

navList.addEventListener('click', closeMenu);