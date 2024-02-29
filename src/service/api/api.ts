import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import type { IBook } from "./types/book.type";



interface Respones {
    items: IBook[],
    kind: string,
    totalItems: number
}


interface GetReq {
    search: string
    page: number
    categorie: string
    order: string
}



const SERVER_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyAl9CnrJYX5iIFYeJt8MsLx4JIVpSZ-m70'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
    endpoints: builder => ({
        getBooks: builder.query<Respones, GetReq>({
            query: obj => {

                const isSearch = obj.search ? obj.search : 'react'
                const isCategorie = obj.categorie ?`:${obj.categorie}` : ''
                const startIndex = obj.page > 1 ? obj.page * 30 : 0

                return {
                    url: `?q=${isSearch}${isCategorie}&maxResults=30&key=${API_KEY}&startIndex=${startIndex}&orderBy=${obj.order}`,
                    method: 'GET'
                }
            }
        })
    })
})


export const { useLazyGetBooksQuery } = api

export default api.reducer