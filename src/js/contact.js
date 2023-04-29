import DOMConstructor from './DOMConstructor';

// Define a ContactPage class
class ContactPage {
  // Define an init method to initialize the class
  init() {
    this.cacheDom(); // Cache DOM elements
    this.render(); // Render the contact page
  }

  // Define a cacheDom method to cache DOM elements
  cacheDom() {
    this.content = document.querySelector('.content'); // Get the content element
    // Create new DOM elements using the DOMConstructor class
    this.div = new DOMConstructor('div', null, null, null, null);
    this.h1 = new DOMConstructor('h1', null, null, null, null);
    this.form = new DOMConstructor('form', null, null, null, null);
    this.input = new DOMConstructor('input', null, null, null, null);
    this.textarea = new DOMConstructor('textarea', null, null, null, null);
    this.button = new DOMConstructor('button', null, null, null, null);
  }

  // Define a render method to create and add elements to the page
  render() {
    let container = this.div.setElement(); // Create a div container element
    container.classList.add('formContainer'); // Add a class to the container

    let title = this.h1.setElement(); // Create an h1 title element
    title.classList.add('formTitle'); // Add a class to the title element
    title.innerText = 'Contact Us!!!'; // Set the title text

    let form = this.form.setElement(); // Create a form element
    form.classList.add('formContact'); // Add a class to the form

    let name = this.input.setElement(); // Create an input element for the name
    name.type = 'text'; // Set the input type to text
    name.placeholder = 'Name'; // Set the input placeholder text

    let surname = this.input.setElement(); // Create an input element for the surname
    surname.type = 'text'; // Set the input type to text
    surname.placeholder = 'Last Name'; // Set the input placeholder text

    let email = this.input.setElement(); // Create an input element for the email
    email.type = 'email'; // Set the input type to email
    email.placeholder = 'Email'; // Set the input placeholder text

    let phone = this.input.setElement(); // Create an input element for the phone number
    phone.type = 'tel'; // Set the input type to tel
    phone.placeholder = 'Phone Number'; // Set the input placeholder text

    let subject = this.textarea.setElement(); // Create a textarea element for the subject
    // Set the input attributes
    subject.setAttribute('rows', '5');
    subject.placeholder = 'Subject';

    let submit = this.button.setElement(); // Create a submit button element
    submit.classList.add('submitButton'); // Add a class to the button
    submit.type = 'submit'; // Set the button type to submit

    // Append the input elements to the form
    form.appendChild(name);
    form.appendChild(surname);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(subject);
    form.appendChild(submit);

    // Append the title and form to the container
    container.appendChild(title);
    container.appendChild(form);

    // Append the container to the content element
    this.content.appendChild(container);
  }
}

// Create a new instance of the ContactPage class and export it
const contact = new ContactPage();
export default contact;
