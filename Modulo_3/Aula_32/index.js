function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList);

    const listElements = document.getElementsByTagName('li')
    console.log(listElements);

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs);

    const contacts = document.querySelectorAll('#contact-list > li > label') // Mesma sintaxe que o CSS. Podendo usar #, >, etc
    console.log(contacts);

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1);

    // Query obtendo apenas um elemento
    const firstContact = document.querySelector('#contact-list > li > label') // Mesma coisa que la encima, porem, ele seleciona apenas um elemento, pois não é SelectorAll 
    console.log(firstContact);
}

