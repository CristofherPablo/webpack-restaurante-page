import './css/style.css';
import icon from './assets/yolk.ico';

import testingCreateElement from './js/home';

const iconImg = document.querySelector(`link[rel~='icon']`);
iconImg.href = icon;

window.onload = () => {
  testingCreateElement();
};
