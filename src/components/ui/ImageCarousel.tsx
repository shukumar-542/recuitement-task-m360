import { Carousel } from 'antd';


const imageUrls = [
    'https://i.ibb.co/qCzFRpW/1.png',
    'https://i.ibb.co/HKp7j44/3.png',
    'https://i.ibb.co/qCzFRpW/1.png',
    
  ];

const ImageCarousel = () => {
    return (
        <Carousel autoplay>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '50vh' }} />
          </div>
        ))}
      </Carousel>
    );
};

export default ImageCarousel;