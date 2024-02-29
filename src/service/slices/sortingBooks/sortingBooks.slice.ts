import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { RootState } from "../../store"; 


type SortValueType = {
    preview: string
    value: string
}


interface Iinitialstate {
    searchValue: string,
    isFetchReq: number
    isOpenSortingPopup: boolean
    sortValue: SortValueType
    categorieValue: SortValueType
}


const initialState: Iinitialstate = {
    searchValue: '',
    isFetchReq: 0,
    isOpenSortingPopup: false,
    sortValue: { preview: 'Рекомендованные', value: 'relevance' },
    categorieValue: { preview: 'Все', value: '' }
}


export const sortingBooks = createSlice({
    name: 'sortingBooks',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setIsFetchRequest: (state) => {
            state.isFetchReq += 1
        },
        setIsOpenSortingPopup: (state, action: PayloadAction<boolean>) => {
            state.isOpenSortingPopup = action.payload
        },
        setSortValue: (state, action: PayloadAction<SortValueType>) => {
            state.sortValue = action.payload
        },
        setCategorieValue: (state, action: PayloadAction<SortValueType>) => {
            state.categorieValue = action.payload 
        }
    }
})



export const sortingBooksSelector = (state: RootState) => state.sortingBooks

export const { 
    setSearchValue, 
    setIsFetchRequest, 
    setIsOpenSortingPopup,
    setSortValue,
    setCategorieValue 
} = sortingBooks.actions
