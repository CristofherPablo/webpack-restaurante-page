import DOMConstructor from './DOMConstructor';

var headerMenu = (function () {
  var content, header, logo, ul, liHome, liMenu, liContact;
  function init() {
    cacheDOM();
    render();
  }

  function cacheDOM() {
    content = document.querySelector('.content');
    header = new DOMConstructor('header', 'headerMenu', null, null);
    logo = new DOMConstructor('img', null, null, null);
    ul = new DOMConstructor('ul', 'menu', null, null);
    liHome = new DOMConstructor('li', null, null, 'Home');
    liMenu = new DOMConstructor('li', null, null, 'Menu');
    liContact = new DOMConstructor('li', null, null, 'Contact Us');

  }

  function render() {
    ul = ul.setElement();
    ul.appendChild(liHome.setElement());
    ul.appendChild(liMenu.setElement());
    ul.appendChild(liContact.setElement());
    header = header.setElement();
    header.appendChild(logo.setElement());
    header.appendChild(ul);
    content.appendChild(header);
  }
  return {
    init: init,
  };
})();

export default headerMenu;
