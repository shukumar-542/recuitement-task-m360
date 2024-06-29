import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../redux/api/productApi";
import { Col, Flex, Image, Row } from 'antd';
import { FaDollarSign } from "react-icons/fa6";
import Rating from "../../utils/Rating";
import Review from "../../components/ui/Review";
import { IProductReview } from "../../types/IProducts.types";
import { discountPrice } from "../../utils/discountPrice";
import Loading from "../../components/ui/Loading";
const ProductDetails = () => {
    const { id } = useParams();

    // Get single product by using product id
    const { data, isLoading } = useGetProductDetailsQuery(id)


    if (isLoading) {
        return <div style={{ minHeight: '75vh' }}><Loading /></div>
    }

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', minHeight: '75vh', }}>
            <h1 style={{ color: '#666', paddingBottom: '10px' }}>Product details</h1>

            <Row gutter={[16, 16]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <Row justify="center" align="middle">
                        <Col xs={4} sm={4} md={4} lg={4} >
                            <Flex gap="middle" style={{ justifyContent: 'space-between', alignItems: 'center' }} vertical  >
                                <div style={{ border: '1px dashed gray' }}>
                                    <img height={50} width={50} src={data?.images[0]} alt="" />
                                </div>
                                <img height={50} width={50} style={{ border: '1px dashed gray' }} src={data?.images[0]} alt="" />
                                <img height={50} width={50} style={{ border: '1px dashed gray' }} src={data?.images[0]} alt="" />
                            </Flex>
                        </Col>
                        <Col xs={20} sm={20} md={20} lg={20}>

                            <div style={{ display: 'flex', justifyContent: "center", backgroundColor: "#F6F6F6", }}>
                                <Image height={300} width={450} src={data?.images[0]} alt="" />
                            </div>
                        </Col>


                    </Row>



                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                    <div >
                        <h1 >{data?.title}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}>Rating: </p>
                            <Rating num={data?.rating}></Rating>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <p style={{ fontSize: "20px", fontWeight: 'bold' }}><span><FaDollarSign /></span>  {discountPrice(data?.price, data?.discountPercentage)} <span style={{ color: '#666', fontSize: '15px', textDecoration: 'line-through' }}>{data?.price}</span></p>
                            <p style={{ fontWeight: 'bold' }}>Available : <span style={{ color: 'green' }}>In Stock {data?.stock}</span> </p>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <p style={{ color: '#666' }}>{data?.description}</p>
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}><span style={{ color: '#666' }}>Brand</span> : <span style={{ color: '#4faf5f' }}> {data?.brand}</span></p>

                            <p style={{ fontWeight: 'bold', marginTop: '5px' }}><span style={{ color: '#666' }} >Tags :</span>  <span style={{ color: '#4faf5f' }}>{data?.tags}</span></p>

                            <Flex justify="space-between">
                                <p style={{ marginTop: '5px', color: '#666' }}><span style={{ fontWeight: 'bold' }} >Warranty  : </span>{data?.warrantyInformation}</p>
                                <p style={{ marginTop: '5px', color: '#666' }}><span style={{ fontWeight: 'bold' }}>Shipping : </span> {data?.shippingInformation}</p>
                            </Flex>
                            <div style={{ marginTop: '5px' }}>
                                <p><span style={{ fontWeight: 'bold', color: '#666' }}>dimensions</span> : Width : {data?.dimensions?.width} , Height:{data?.dimensions?.height} , Depth:{data?.dimensions?.depth}</p>
                            </div>
                           
                            <Flex justify="space-between">
                                <p style={{ marginTop: '5px', color: '#666' }}><span style={{ fontWeight: 'bold' }} >Minimum Order Quantity: </span>{data?.minimumOrderQuantity}</p>
                                <p style={{ marginTop: '5px', color: '#666' }}><span style={{ fontWeight: 'bold' }}>Return Policy : </span> {data?.returnPolicy}</p>
                            </Flex>
                        </div>


                    </div>
                </Col>
            </Row>

            <div style={{ marginTop: '20px' }}>
                <h1 style={{ color: '#666', marginBottom: '20px' }}>Review : </h1>

                <Row gutter={[16, 16]} justify="space-between"  >
                    {
                        data?.reviews?.map((review: IProductReview) => <Review productReview={review}></Review>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default ProductDetails;