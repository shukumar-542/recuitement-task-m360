import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../redux/api/productApi";
import { Col, Row } from 'antd';
import { FaDollarSign } from "react-icons/fa6";
import Rating from "../../utils/Rating";
import Review from "../../components/ui/Review";
import { IProductReview } from "../../types/IProducts.types";
const ProductDetails = () => {
    const { id } = useParams();

    // Get single product by using product id
    const { data, isLoading } = useGetProductDetailsQuery(id)
    console.log(data);
    if (isLoading) {
        <h1>Loading</h1>
    }



    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', minHeight:'70vh' }}>
            <h1 style={{color: '#666', paddingBottom : '10px'}}>Product details</h1>

            <Row gutter={[16, 16]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <div style={{ display: 'flex', justifyContent: "center", backgroundColor: "gray" }}>
                        <img height={300} width={200} src={data?.images[0]} alt="" />
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <div >
                        <h1 >{data?.title}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}>Rating: </p>
                            <Rating num={data?.rating}></Rating>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: 'bold' }}><span><FaDollarSign /></span> {data?.price}</p>
                            <p style={{ fontWeight: 'bold' }}>Available : <span style={{ color: 'green' }}>In Stock {data?.stock}</span> </p>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <p style={{ color: '#666' }}>{data?.description}</p>
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}><span style={{ color: '#666' }}>Brand</span> : <span style={{ color: '#4faf5f' }}> {data?.brand}</span></p>

                            <p style={{ fontWeight: 'bold', marginTop: '5px' }}><span style={{ color: '#666' }} >Tags :</span>  <span style={{ color: '#4faf5f' }}>{data?.tags}</span></p>
                            <p style={{ fontWeight: 'bold', marginTop: '5px', color: '#666' }}><span style={{}} >Warranty  : </span>{data?.warrantyInformation}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <div style={{ marginTop: '20px' }}>
                <h1 style={{ color: 'green', marginBottom:'20px' }}>Review : </h1>

                <Row gutter={[16,16]}>
                    {
                        data?.reviews?.map((review :  IProductReview) => <Review productReview={review}></Review>)
                    }  
                </Row>



            </div>
        </div>
    );
};

export default ProductDetails;