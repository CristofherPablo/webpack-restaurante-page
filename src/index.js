import './css/style.css';
import icon from './assets/icon.png';

import headerMenu from './js/header-menu';
import homePage from './js/home';
import MenuAssets from './js/menu';
import ContactPage from './js/contact';
import footerBar from './js/footer';

const iconImg = document.querySelector(`link[rel~='icon']`);
iconImg.href = icon;
const menuPage = new MenuAssets();

var pagePicked = homePage;

function cleanPage() {
  const pageContainer = document.querySelector('.content');
  pageContainer.innerHTML = '';
}

function initWebsite() {
  headerMenu.init();
  pagePicked.init();
  footerBar.init();
}

function changePage(clickedBtn) {
  if (clickedBtn === 'home') {
    pagePicked = homePage;
  } else if (clickedBtn === 'menu') {
    pagePicked = menuPage;
  } else if (clickedBtn === 'contact') {
    pagePicked = ContactPage;
  }
}

initWebsite();

const homeBtn = document.querySelector('#btnHome');
const menuBtn = document.querySelector('#btnMenu');
const contactBtn = document.querySelector('#btnContact');

homeBtn.addEventListener('click', () => {
  changePage('home');
  cleanPage();
  initWebsite();
});
menuBtn.addEventListener('click', () => {
  changePage('menu');
  cleanPage();
  initWebsite();
});
contactBtn.addEventListener('click', () => {
  changePage('contact');
  cleanPage();
  initWebsite();
});
