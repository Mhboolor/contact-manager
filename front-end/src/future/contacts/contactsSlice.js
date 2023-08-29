import { createSlice , createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";


const contactsAdapter = createEntityAdapter({})


const cntactsSlice = createSlice({
    name : "contacts",
    initialState : contactsAdapter.getInitialState(),
    reducers : {},
})