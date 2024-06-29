// import { useAllProductQuery } from "../../redux/api/productApi";
import { Pagination,  Table, Tooltip, } from 'antd';
import { useAllProductQuery } from '../../redux/api/productApi';
import type { PaginationProps, TableProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import Loading from '../../components/ui/Loading';

interface DataType {
  key: string,
  title: string,
  category: string,
  price: number
}




const Products = () => {
  const [current, setCurrent] = useState(1);
  const [params, setParams] = useState([
    { name: "limit", value: 10 },
    { name: "skip", value: 0 },
  ]);

  // Get all Product from api
  const { data: products, isLoading } = useAllProductQuery(params)



  useEffect(() => {
    setParams([
      { name: "limit", value: 10 },
      { name: "skip", value: (current - 1) * 10 },
    ]);
  }, [current]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const columns: TableProps<DataType>['columns'] = [
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
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
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
        <div style={{ display: 'flex', gap: "8px" }}>

          <NavLink to={`/details/${record?.key}`}  >
            <Tooltip title="View details">
              <FcViewDetails size={25} />
            </Tooltip>
          </NavLink>
          <NavLink to={`/update/${record?.key}`} style={{ cursor: 'pointer', color: 'green' }}>
            <Tooltip title="Edit">
              <FaEdit size={20} />
            </Tooltip>
          </NavLink>
        </div>

      ),
    },
  ];


  if (isLoading) {
    return <Loading/>
  }

  const data = products?.products?.map((item: { id: unknown; }) => ({
    ...item,
    key: item.id,
  }));


  return (
    <div style={{padding : '20px 48px'}}>
      <h1 style={{color:'#666', margin : '10px 0'}}>All Products</h1>
      <Table columns={columns} pagination={false} dataSource={data} />
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "end" }}
      >
        {" "}
        <Pagination
          current={current}
          onChange={onChange}
          total={products?.total}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Products;