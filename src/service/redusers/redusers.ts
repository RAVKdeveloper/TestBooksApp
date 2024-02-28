import { combineSlices } from "@reduxjs/toolkit"
import { api } from "../api/api";

import { sortingBooks } from "../slices/sortingBooks/sortingBooks.slice"



export const rootReducer = combineSlices(api, sortingBooks)

