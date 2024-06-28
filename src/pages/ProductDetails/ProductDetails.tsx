import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../redux/api/productApi";
import { Col, Row } from 'antd';
import { FaDollarSign } from "react-icons/fa6";
// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetProductDetailsQuery(id)
    console.log(data);
    if (isLoading) {
        <h1>Loading</h1>
    }
    return (
        <div>
            <h1>Product details</h1>

            <Row gutter={[16, 16]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <div style={{ display : 'flex' , justifyContent :"center"}}>
                        <img height={300} width={200} src={data?.images[0]} alt="" />
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <div >
                        <h1 >{data?.title}</h1>
                        <p><span><FaDollarSign /></span> {data?.price}</p>
                    </div>
                </Col>
                {/* <Col className="gutter-row" xs={12} sm={12} md={6} lg={6}>
                    <div style={style}>col</div>
                </Col>
                <Col className="gutter-row" xs={12} sm={12} md={6} lg={6}>
                    <div style={style}>col</div>
                </Col> */}
            </Row>
        </div>
    );
};

export default ProductDetails;