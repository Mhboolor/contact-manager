import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import contactsSlice, { fetchAllContacts } from "../future/contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    contacts : contactsSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

store.dispatch(fetchAllContacts())