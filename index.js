const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contactsOperations = require("./contacts.js");
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;
    case "update":
      const updContact = await contactsOperations.updateContact(
        id,
        name,
        email,
        phone
      );
      if (!updContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updContact);
      break;
    case "remove":
      const removeCont = await contactsOperations.removeContact(id);
      console.log(removeCont);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
(async () => {
  await invokeAction(argv);
})();
