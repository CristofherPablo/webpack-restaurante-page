import '../css/home.css';
import DOMConstructor from './DOMConstructor';
import firstSlide from '../assets/slide1.jpg';
import secondSlide from '../assets/slide2.jpg';
import thirdSlide from '../assets/slide3.jpg';
import fourthSlide from '../assets/slide4.jpg';

var homePage = (function () {
  let content, input, div, img, label, p, btn;
  let slidesImg = [firstSlide, secondSlide, thirdSlide, fourthSlide];

  function init() {
    cacheDOM();
    render();
    autoSlide();
    getHeight ()
  }

  function cacheDOM() {
    content = document.querySelector('.content');
    div = new DOMConstructor('div', null, null, null, null);
    input = new DOMConstructor('input', null, null, null, null);
    img = new DOMConstructor('img', null, null, null, null);
    label = new DOMConstructor('label', null, null, null, null);
    p = new DOMConstructor('label', null, null, null, null);
    btn = new DOMConstructor('button', null, null, null, null);
  }

  function render() {
    //setting the main carousel
    let divCarousel = div.setElement();
    divCarousel.classList.add('slider');

    // setting up the inner container
    let divSlider = div.setElement();
    divSlider.classList.add('slides');

    //setting the four inputs and appending to the carousel
    for (let i = 0; i < 4; i++) {
      let inputElement;

      inputElement = input.setElement();
      inputElement.type = 'radio';
      inputElement.name = 'radio-btn';
      inputElement.id = 'radio' + (i + 1);

      divSlider.appendChild(inputElement);
    }

    //setting the four slides and appending to the slider container

    for (let i = 0; i < 4; i++) {
      let divSlideContainer, divSlide, imgSlide, btnSlide, pSlide;

      //setting the container for the img
      divSlideContainer = div.setElement();
      divSlideContainer.classList.add('slide');

      if (i === 0) {
        //setting an extra class for the first slide
        divSlideContainer.classList.add('first');
        // setting the button and small description
        divSlide = div.setElement();
        btnSlide = btn.setElement();
        btnSlide.innerText = 'Oder from Menu';
        pSlide = p.setElement();
        pSlide.innerText = 'The Best Donuts from the town!!';

        divSlide.appendChild(btnSlide);
        divSlide.appendChild(pSlide);
        divSlideContainer.appendChild(divSlide);
      }

      //setting the image
      divSlideContainer.style.backgroundImage = 'url(' + slidesImg[i] + ')';
      //imgSlide = img.setElement();
      //imgSlide.setAttribute('src', slidesImg[i]);
      //appending the img
      //divSlideContainer.appendChild(imgSlide);
      //appending to the slider
      divSlider.appendChild(divSlideContainer);
    }

    //navigation auto buttons

    let divNavigation = div.setElement();
    divNavigation.classList.add('navigation-auto');

    for (let i = 0; i < 4; i++) {
      let divAuto = div.setElement();
      divAuto.classList.add('auto-btn' + (i + 1));

      divNavigation.appendChild(divAuto);
    }

    divSlider.appendChild(divNavigation);
    divCarousel.appendChild(divSlider);
    // setting the manual buttons to navigate the slides

    let divManual = div.setElement();
    divManual.classList.add('navigation-manual');

    for (let i = 0; i < 4; i++) {
      let labelManual = label.setElement();
      labelManual.setAttribute('for', 'radio' + (i + 1));
      labelManual.classList.add('manual-btn');

      divManual.appendChild(labelManual);
    }

    divCarousel.appendChild(divManual);
    content.appendChild(divCarousel);
  }

  function autoSlide() {
    let countSlide = 1;
    document.getElementById('radio1').checked = true;

    setInterval(() => {
      nextImage();
    }, 4000);

    function nextImage() {
      countSlide++;
      if (countSlide > 4) {
        countSlide = 1;
      }
      document.getElementById(`radio${countSlide}`).checked = true;
    }
  }

  function getHeight () {
    var slides = document.querySelector('.slides');
    var slider = document.querySelector('.slider');
    var heightHeader = document.querySelector('header').offsetHeight;

    slides.style.height = (window.innerHeight - heightHeader - 70) + 'px';
    slider.style.height = (window.innerHeight - heightHeader - 70) + 'px';

  }
  return {
    init: init,
  };
})();

export default homePage;
