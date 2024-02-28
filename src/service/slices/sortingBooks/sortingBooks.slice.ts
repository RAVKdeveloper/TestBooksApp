import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { RootState } from "../../store"; 



interface Iinitialstate {
    searchValue: string
}


const initialState: Iinitialstate = {
    searchValue: ''
}


export const sortingBooks = createSlice({
    name: 'sortingBooks',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})



export const sortingBooksSelector = (state: RootState) => state.sortingBooks

export const { setSearchValue } = sortingBooks.actions
