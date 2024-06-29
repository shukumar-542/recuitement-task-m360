import { Carousel } from 'antd';


const imageUrls = [
  {
    'title' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nostrum.',
    'image' : 'https://i.ibb.co/qCzFRpW/1.png'
  },
  {
    'title' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nostrum.',
    'image' :'https://i.ibb.co/qCzFRpW/1.png'
  },
  {
    'title' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nostrum.',
    'image' :'https://i.ibb.co/HKp7j44/3.png'
  },
  
  
  

];

const ImageCarousel = () => {
  return (
    <Carousel autoplay>
      {imageUrls.map((url, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <img src={url?.image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '50vh', objectFit: 'cover',zIndex: 1 }} />

          Semi-transparent overlay
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the opacity as needed
          }}></div>

          {/* Text overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black', // White text
            padding: '0 20px',
            textAlign: 'center',
            zIndex: 1 // Ensure the text is above the overlay
          }}>
            <h1>{url?.title}</h1>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;