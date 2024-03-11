import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: [],
    search: '',
    year: '', 
    curpage: 1,
    nextpage: null,
    prevpage: null,
    totalPages:1,
    isLoading:false
};

const OrgSlice = createSlice({
    name: "Org",
    initialState,
    reducers: {
        setData(state, action) {
            state.project = action.payload; 
        },
        updatePage(state, action) {
            state.curpage = action.payload.currentPage; 
            state.prevpage = action.payload.prevPage;
            state.nextpage = action.payload.nextPage;
            state.totalPages = action.payload.totalPages;
        },
        setYear(state, action) {
            state.year = action.payload; 
        },
        setSearch(state,action){
            state.search=action.payload
        },
        setCurPage(state, action) {
            state.curpage = action.payload; 
        },
        updateLoading(state, action) {
            state.isLoading = action.payload; 
        },
    }
});

export const { setData, updatePage, setYear,setCurPage ,setSearch,updateLoading} = OrgSlice.actions;

export default OrgSlice.reducer;
