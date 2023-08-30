import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

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
      });
  },
});

export const { selectAll: selectAllContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts);

export const selectContactsStatus = (state) => state.contacts.status;

export default cntactsSlice.reducer;
export const { setAllContacts } = cntactsSlice.actions;
