import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"; 



const SERVER_URL = ''


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
    endpoints: builder => ({
        
    })
})



export default api.reducer