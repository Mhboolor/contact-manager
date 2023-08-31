import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contacts from "../components/contacts/Contacts";
import User from "../components/user/User";
import AddContact from "../components/addContact/AddContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Contacts /> },
      { path: "/favorits", element: <Contacts /> },
      { path: "/category/:categoryName:", element: <Contacts /> },
      { path: "/:userId", element: <User /> },
      { path: "/add-contact", element: <AddContact /> },
    ],
  },
]);
