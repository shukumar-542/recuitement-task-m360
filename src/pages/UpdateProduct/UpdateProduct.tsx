import { useParams } from "react-router-dom";
import { useGetProductCategoriesQuery, useGetProductDetailsQuery } from "../../redux/api/productApi";
import { Form, Input, Button, Select,DatePicker, Card,InputNumber  } from 'antd';
import { useEffect,  } from "react";
import moment from 'moment';
import Loading from "../../components/ui/Loading";
const { Option } = Select;


type ProductCategory = {
    slug: string;
    name: string;
    url: string;
  };

  type Review = {
    rating: number;
    comment: string;
    date:  moment.Moment;
    reviewerName: string;
    reviewerEmail: string;
  };

//   type ProductDetails = {
//     title: string;
//     description: string;
//     price: number;
//     category: string;
//     reviews: Review[];
//   };

type FormValues = {
    title: string;
    description: string;
    price: number;
    category: string;
    reviews: Review[];
  };


const UpdateProduct = () => {
    const { id } = useParams()

    const [form] = Form.useForm();
    // const [product, setProduct] = useState(null);
    // const [categories, setCategories] = useState([]);

    const { data: productDetails, isLoading: isProductLoading } = useGetProductDetailsQuery(id)
    const { data: productCategory, isLoading: isCategoriesLoading } = useGetProductCategoriesQuery('')


    useEffect(() => {
        if (productDetails) {
            // Set form fields with product details, including reviews
            form.setFieldsValue({
                ...productDetails,
                reviews: productDetails.reviews.map((review : Review) => ({
                    rating: review.rating,
                    comment: review.comment,
                    date: moment(review.date),
                    reviewerName: review.reviewerName,
                    reviewerEmail: review.reviewerEmail
                })),
            });

        }
    }, [productDetails, form]);


    const onFinish = async (values : FormValues) => {


        const updatedProducts = {
            ...values,
            reviews: values.reviews.map(review => ({
                ...review,
                date: review.date.toISOString()
              }))
        }
        console.log(updatedProducts);
    }

    if (isProductLoading || isCategoriesLoading) {
        return <div style={{minHeight : '75vh'}}><Loading/></div>;
    }

    return (
        <Card title="Update Product" style={{ padding : '48px'}}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the product title' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the product description' }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter the product price' }]}>
                    <Input type="number" />
                </Form.Item>

                <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
                    <Select>
                        {productCategory?.map((category : ProductCategory) => (
                            <Option key={category?.slug} value={category?.slug}>
                                {category?.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.List name="reviews">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name,  ...restField }) => (
                <div key={key} style={{ marginBottom: 8 }}>
                  <Form.Item
                    {...restField}
                    name={[name, 'rating']}
                    label="Rating"
                    rules={[{ required: true, message: 'Please enter the rating' }]}
                  >
                    <InputNumber min={1} max={5} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'comment']}
                    label="Comment"
                    rules={[{ required: true, message: 'Please enter the comment' }]}
                  >
                    <Input.TextArea rows={2} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'date']}
                    label="Date"
                    rules={[{ required: true, message: 'Please select the date' }]}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'reviewerName']}
                    label="Reviewer Name"
                    rules={[{ required: true, message: 'Please enter the reviewer name' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'reviewerEmail']}
                    label="Reviewer Email"
                    rules={[{ required: true, message: 'Please enter the reviewer email' }]}
                  >
                    <Input type="email" />
                  </Form.Item>
                  <Button type="link" onClick={() => remove(name)}>
                    Remove
                  </Button>
                  <hr />
                </div>
              ))}
              <Button type="dashed" onClick={() => add()} block>
                Add Review
              </Button>
            </>
          )}
        </Form.List>


                <Form.Item style={{ marginTop : '10px', textAlign:'center'}}>
                    <Button  type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UpdateProduct;