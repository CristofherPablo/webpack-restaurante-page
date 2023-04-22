import DOMConstructor from './DOMConstructor';

function testingCreateElement() {
  const div = new DOMConstructor('div', null, ['test']);

  const container = document.querySelector('.content');
    
  container.appendChild(div.setElement());
}

export default testingCreateElement;