import './css/style.css';
import icon from './assets/icon.png';

import testingCreateElement from './js/home';
import footerBar from './js/footer';

const iconImg = document.querySelector(`link[rel~='icon']`);
iconImg.href = icon;

window.onload = () => {
  testingCreateElement();
  footerBar.init();
};
