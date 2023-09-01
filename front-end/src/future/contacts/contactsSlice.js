import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:9000";

const contactsAdapter = createEntityAdapter({});

const initialState = contactsAdapter.getInitialState({
  status: "idle",
});

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const response = await axios.get(`${baseUrl}/contacts`);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(`${baseUrl}/contacts`, contact);
    return response.data;
  }
);

export const editFav = createAsyncThunk("contacts/etidFav", async (contact) => {
  const response = await axios.put(
    `${baseUrl}/contacts/${contact.id}`,
    contact
  );
  return response.data;
});

export const delContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(`${baseUrl}/contacts/${contactId}`);
    return contactId;
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
      .addCase(addContact.fulfilled, (state, action) => {
        contactsAdapter.addOne(state, action.payload);
        state.status = "idle";
      })
      .addCase(editFav.fulfilled, (state, action) => {
        contactsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: { favorites: action.payload.favorites },
        });
      })
      .addCase(delContact.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload);
      });
  },
});

export const { selectAll: selectAllContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts);

export const selectContactsStatus = (state) => state.contacts.status;

export default cntactsSlice.reducer;
export const { setAllContacts } = cntactsSlice.actions;
