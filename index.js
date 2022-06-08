const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
} = require("./contacts.js");
// index.js
// const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;
    case "get":
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;
    case "update":
      const updContact = await updateContact(id, name, email, phone);
      if (!updContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updContact);
      break;

    //     case "remove":
    //       // ... id
    //       break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// {
//     "id": "42d6559f-3db9-4df3-9dec-432e216b4409",
//     "name": "Ally Mond",
//     "email": "n.a@com.uk",
//     "phone": "(992) 111-1111"
//   }

// invokeAction({ action: "list" });
// const id = "2";
// invokeAction({ action: "get", id });

// invokeAction({
//   action: "add",
//   name: "Ally Mond",
//   email: "n.a@com.uk",
//   phone: "(992) 111-1111",
// });

invokeAction({
  action: "update",
  id: "42d6559f-3db9-4df3-9dec-432e216b4409",
  name: "Ally Mond77",
  email: "n.a@com.ukraine",
  phone: "(992) 222-2222",
});
