import './css/style.css';
import icon from './assets/icon.png';

import headerMenu from './js/header-menu';
//import homePage from './js/home';
import MenuAssets from './js/menu';
import footerBar from './js/footer';

const iconImg = document.querySelector(`link[rel~='icon']`);
iconImg.href = icon;
const menuPage = new MenuAssets();

window.onload = () => {

  headerMenu.init();
  menuPage.init();
  footerBar.init();

  //window.onresize = () => {
 //   homePage.getHeight();
 // };
};
