import DOMConstructor from './DOMConstructor';
import headerMenu from './header-menu';

function testingCreateElement() {
  const div = new DOMConstructor('div', null, ['test'], null);

  const container = document.querySelector('.content');
    
  container.appendChild(div.setElement());
  headerMenu.init();
}

export default testingCreateElement;