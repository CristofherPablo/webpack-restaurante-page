class DOMConstructor {

  constructor(type, id, classArray) {
    if(!type) return;
    this.type = type;
    this.id = id;
    this.classArray = classArray;
    this.element = '';
  }

  setElement = () => {
    this.element = document.createElement(this.type);

    if(this.id){
        this.element.id = this.id;
    }

    if(this.classArray){
        for(const className of this.classArray){
            this.element.classList.add(className);
        }
    }
    return this.element;
  } 

}

export default DOMConstructor;
