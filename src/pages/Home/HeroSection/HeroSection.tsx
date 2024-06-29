import './style.css'; 
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className='content'>
                <h1 className='hero-heading'>
                    <span>Beauty Wellness Spa & Beauty</span>
                    <span className="highlight">Massage Salon</span>
                </h1>
                <button style={{padding : '15px 25px', backgroundColor : '#D49B01', border:'none' ,   }}>Explore More</button>
            </div> 
        </div>
    );
};

export default HeroSection;