import DOMConstructor from './DOMConstructor';
import '../css/header-footer.css'
import logoImg from '../assets/logo.png';


var headerMenu = (function () {
  var content, header, logo, ul, liHome, liMenu, liContact, logoTxt, a, divLogo;

  function init() {
    cacheDOM();
    render();
  }

  function cacheDOM() {
    content = document.querySelector('.content');
    header = new DOMConstructor('header', 'headerMenu', null, null);
    //logo elements 
    divLogo = new DOMConstructor('div', null, ['headerLogo'], null);
    a = new DOMConstructor('a', 'logoHome', null, null);
    logo = new DOMConstructor('img', null, ['logoImg'], null);
    logoTxt = new DOMConstructor('p', null, null, `Funny Donuts'`);
    // nav elements 
    ul = new DOMConstructor('ul', 'menu', null, null);
    liHome = new DOMConstructor('li', null, null, 'Home');
    liMenu = new DOMConstructor('li', null, null, 'Menu');
    liContact = new DOMConstructor('li', null, null, 'Contact Us');

  }

  function render() {
    // Setting the Logo Img and text
    divLogo = divLogo.setElement();
    logo = logo.setElement();
    logo.setAttribute('src', logoImg);
    logoTxt = logoTxt.setElement();
    a = a.setElement();
    a.appendChild(logo);
    divLogo.appendChild(a);
    divLogo.appendChild(logoTxt);

    //Setting the navbar menu 
    ul = ul.setElement();
    ul.appendChild(liHome.setElement());
    ul.appendChild(liMenu.setElement());
    ul.appendChild(liContact.setElement());

    // append it all to the header 
    header = header.setElement();
    header.appendChild(divLogo);
    header.appendChild(ul);

    // appending the header to the content container
    content.appendChild(header);
  }
  return {
    init: init,
  };
})();

export default headerMenu;
