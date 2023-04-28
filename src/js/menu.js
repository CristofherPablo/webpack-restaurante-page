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
      {
        picture: `${caramel}`,
        name: 'Caramel',
        description:
          'Raised ring with caramel frosting and sprinkled with powdered sugar',
      },
      {
        picture: `${coconut}`,
        name: 'Coconut',
        description:
          'Raised ring with coconut topping and filled with coconut cream',
      },
      {
        picture: `${nutella}`,
        name: 'Nutella',
        description:
          'Raised ring with chocolate frosting, filled with nutella and colorful sprinkles',
      },
      {
        picture: `${darkChocolate}`,
        name: 'Dark Chocolate',
        description:
          'Raised ring with dark chocolate topping and squared chocolate sprinkles',
      },
      {
        picture: `${oreo}`,
        name: 'Oreo',
        description:
          'Raised ring with oreo topping with oreo bites and chocolate dough',
      },
      {
        picture: `${pistachio}`,
        name: 'Pistachio',
        description:
          'Raised ring with pistachio topping and colorful sprinkles',
      },
      {
        picture: `${plain}`,
        name: 'Original',
        description: 'Raised ring with glaze',
      },
      {
        picture: `${sakura}`,
        name: 'Sakura',
        description:
          'Raised ring with Sakura frosting and sprinkled Sakura seeds',
      },
      {
        picture: `${strawberry}`,
        name: 'Strawberry',
        description:
          'Raised ring with Strawberry frosting and sprinkled Strawberry bites and white sprinkles',
      },
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
