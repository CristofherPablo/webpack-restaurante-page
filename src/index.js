import './css/style.css';
import icon from './assets/icon.png';

import headerMenu from './js/header-menu';
import homePage from './js/home';
import footerBar from './js/footer';

const iconImg = document.querySelector(`link[rel~='icon']`);
iconImg.href = icon;

window.onload = () => {
  headerMenu.init();
  
  window.onresize = () => {
    homePage.getHeight();
  };
  footerBar.init();
};
