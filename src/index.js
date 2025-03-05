const AddressBook = require("./service/AddressBook.js");
const Contact = require("./model/Contact.js");


const myAddressBook = new AddressBook();

try {
    const contact1 = new Contact("Aryan", "Chaurasia", "Ballia", "Uttar Pradesh", 221715, 7081275312, "aryan@xyz.com");
    myAddressBook.addContact(contact1);
    console.log(myAddressBook.getContact);
} catch (error) {

}