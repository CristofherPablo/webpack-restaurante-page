import DOMConstructor from './DOMConstructor';
import '../css/menu.css';

//import of the pictures to be used
import caramel from '../assets/caramel.jpg';
import coconut from '../assets/coconut.jpg';
import nutella from '../assets/nutella.jpg';
import darkChocolate from '../assets/darkchocolate.jpg';
import oreo from '../assets/oreo.jpg';
import pistachio from '../assets/pistachio.jpg';
import plain from '../assets/plain.jpg';
import sakura from '../assets/sakura.jpg';
import strawberry from '../assets/strawberry.jpg';


class MenuAssets {
  constructor() {
    this.menuArray = [
      { picture: `${caramel}`, name: 'Caramel' },
      { picture: `${coconut}`, name: 'Coconut' },
      { picture: `${nutella}`, name: 'Nutella' },
      { picture: `${darkChocolate}`, name: 'Dark Chocolate' },
      { picture: `${oreo}`, name: 'Oreo' },
      { picture: `${pistachio}`, name: 'Pistachio' },
      { picture: `${plain}`, name: 'Original' },
      { picture: `${sakura}`, name: 'Sakura' },
      { picture: `${strawberry}`, name: 'Strawberry' },
    ];
  }

  init() {
    this.cacheDOM();
    this.render();
  }

  cacheDOM() {
    this.content = document.querySelector('.content');
    this.container = new DOMConstructor(
      'section',
      null,
      ['containerMenu'],
      null,
      null
    );
    this.container = this.container.setElement();
    this.div = new DOMConstructor('div', null, ['menuCard'], null, null);
    this.img = new DOMConstructor('img', null, null, null, null);
    this.p = new DOMConstructor('p', null, null, null, null);
  }

  render() {
    for (const element of this.menuArray) {
      let div = this.div.setElement();
      let img = this.img.setElement();
      let p = this.p.setElement();

      img.setAttribute('src', element.picture);
      p.innerText = element.name;
      div.appendChild(img);
      div.appendChild(p);
      this.container.appendChild(div);
    }

    this.content.appendChild(this.container);
  }
}

export default MenuAssets;
