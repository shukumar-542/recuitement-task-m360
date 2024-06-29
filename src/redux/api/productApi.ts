import { baseApi } from "./baseApi";

interface IProductArg {
    name: string;
    value: string | number;
}


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allProduct: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: IProductArg) => {
                        params.append(item.name, String(item.value));
                    });
                }
                return { url: "/products", method: "GET", params };
            },
            providesTags: ['products']
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: "GET"
            })
        }),
        getProductCategories: builder.query({
            query: () => ({
                url: 'products/categories',
                method: "GET"
            })
        }),
        updateProducts : builder.mutation({
            query : ({id, data}) =>({
                url : `products/${id}`,
                method : 'PATCH',
                body : data
            }),
            invalidatesTags : ['products']
        })

    })
})

export const { useAllProductQuery, useGetProductDetailsQuery, useGetProductCategoriesQuery,useUpdateProductsMutation } = productApi