import { Col } from "antd";
import Rating from "../../utils/Rating";
import { IProductReview } from "../../types/IProducts.types";

const Review = ({productReview}: { productReview : IProductReview}) => {

    
    return (
        <Col className="gutter-row"  xs={24} sm={24} md={8} lg={8} style={{
           
            padding: '16px',
            
        }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                <h3>{productReview?.reviewerName} </h3>
                <span style={{ color: '#666' }}>{productReview?.date}</span>
            </div>
            <p style={{ paddingBottom: '5px' }}>Email: {productReview?.reviewerEmail} </p>
            <Rating num={productReview?.rating} />
            <div>
                <p>{productReview?.comment}</p>
            </div>
        </Col>
    );
};

export default Review;