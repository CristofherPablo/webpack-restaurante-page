import DOMConstructor from './DOMConstructor';
import '../css/header-footer.css'
import logoImg from '../assets/logo.png';


var headerMenu = (function () {
  var content, header, logo, ul, liHome, liMenu, liContact, logoTxt, aLogo;

  function init() {
    cacheDOM();
    render();
  }

  function cacheDOM() {
    content = document.querySelector('.content');
    header = new DOMConstructor('header', 'headerMenu', null, null);
    //logo elements 
    aLogo = new DOMConstructor('a', 'logoHome', ['headerLogo'], null);
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
    logo = logo.setElement();
    logo.setAttribute('src', logoImg);
    logoTxt = logoTxt.setElement();
    aLogo = aLogo.setElement();
    aLogo.appendChild(logo);
    aLogo.appendChild(logoTxt);

    //Setting the navbar menu 
    ul = ul.setElement();
    ul.appendChild(liHome.setElement());
    ul.appendChild(liMenu.setElement());
    ul.appendChild(liContact.setElement());

    // append it all to the header 
    header = header.setElement();
    header.appendChild(aLogo);
    header.appendChild(ul);

    // appending the header to the content container
    content.appendChild(header);
  }
  return {
    init: init,
  };
})();

export default headerMenu;
