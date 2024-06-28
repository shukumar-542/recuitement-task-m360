import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints :(builder)=>({
        allProduct :  builder.query({
            query : ()=>({
                url : 'products',
                method : 'GET',
            }),
            providesTags : ['products']
        }),
    })
})

export const {useAllProductQuery} = productApi