import DOMConstructor from './DOMConstructor';
import '../css/header-footer.css';

var footerBar = (function () {
  var footer, p, content;
  var pContent = `Made by
    <a href="https://github.com/CristofherPablo" target="_blank"
      >Cristofher Guersoni</a> for <a href="https://www.theodinproject.com/paths" target="_blank">Odin Project</a>`;

  function init() {
    cacheDOM();
    render();
  }

  function cacheDOM() {
    footer = new DOMConstructor('footer', null, ['footer'], null);
    p = new DOMConstructor('p', null, null, null);
    content = document.querySelector('.content');
  }

  function render() {
    footer = footer.setElement();
    p = p.setElement();
    p.innerHTML = pContent;
    footer.appendChild(p);
    content.appendChild(footer);
  }

  return {
    init: init,
  };
})();

export default footerBar;