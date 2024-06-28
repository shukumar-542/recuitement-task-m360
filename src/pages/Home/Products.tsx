// import { useAllProductQuery } from "../../redux/api/productApi";
import { Button, Table, } from 'antd';
import { useAllProductQuery } from '../../redux/api/productApi';
import type { TableProps } from 'antd';
interface DataType {
    key : string,
    title : string,
    category :  string,
    price : number
}




const Products = () => {

    const {data : products , isLoading} = useAllProductQuery('')
    

    const columns : TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            responsive: ['sm', 'md', 'lg', 'xl'],
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            responsive: ['md', 'lg', 'xl'],
        },
        
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                  <Button type="primary" onClick={() => handleShowDetails(record)}>Show Details</Button>
                ),
              },
    ];

    const handleShowDetails = (record: DataType) => {
        console.log('Details of record:', record);
        // You can add more actions here, such as opening a modal or navigating to a different page
      };

      if(isLoading){
        return <h1>Loading.</h1>
      }

      const data = products?.products?.map((item: { id: unknown; }) => ({
        ...item,
        key: item.id, // Ensure each item has a unique key
      }));

      console.log(products.data);

    return (
        <div>
            <h1>All Products</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default Products;