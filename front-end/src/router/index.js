import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contacts from "../components/contacts/Contacts";
import User from "../components/user/User";
import AddContact from "../components/addContact/AddContact";
import EditContact from "../components/editContact/EditContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Contacts /> },
      { path: "/:categoryName", element: <Contacts/> },
      { path: "/user/:userId", element: <User /> },
      { path: "/add-contact", element: <AddContact /> },
      { path: "/edit-contact/:userId", element: <EditContact /> },
    ],
  },
]);
