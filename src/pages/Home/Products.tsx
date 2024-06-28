import { useAllProductQuery } from "../../redux/api/productApi";

const Products = () => {

    const {data, isLoading} = useAllProductQuery('')
    console.log(data);
    return (
        <div>
            <h1>All Products</h1>
        </div>
    );
};

export default Products;