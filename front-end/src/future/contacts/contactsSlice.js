import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios"

const baseUrl = "http://localhost:9000";

const contactsAdapter = createEntityAdapter({});

const initialState = contactsAdapter.getInitialState({
  status: "idle",
});

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const response = await fetch(`${baseUrl}/contacts`, { method: "GET" });
    return response.json();
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(`${baseUrl}/contacts` , contact);
    return response.data;
  }
);

const cntactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.status = "succuss";
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addContact.fulfilled , (state , action) => {
        contactsAdapter.addOne(state , action.payload)
      })
  },
});

export const { selectAll: selectAllContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts);

export const selectContactsStatus = (state) => state.contacts.status;

export default cntactsSlice.reducer;
export const { setAllContacts } = cntactsSlice.actions;
