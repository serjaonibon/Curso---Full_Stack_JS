// No javascript, através da função show() que será executada
//ao clicar no botão, podemos obter um elemento do DOM através do id:

function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  const contact1 = document.getElementsByTagName("contact1");
  console.log(contact1);

  const firstContact = document.querySelector("#contact-list > li > label")
  console.log(firstContact)
}
