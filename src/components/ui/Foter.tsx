import { Layout } from 'antd';
const {  Footer } = Layout;
import { FaFacebook, FaGooglePlusG, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Foter = () => {
    return (
        <Footer style={{ textAlign: 'center', padding: '0px 0px' }}>

                <div style={{ backgroundColor: '#111111', padding: '50px 0px 20px 0px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: "#ffff", borderRadius: '100%', padding: '5px', display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <FaFacebook size={25} />
                    </div>
                    <div style={{ backgroundColor: "#ffff", borderRadius: '100%', padding: '5px', display: 'flex', justifyItems: 'center', alignItems: 'center', cursor: 'pointer' }}>
                        <FaTwitter size={25} />
                    </div>
                    <div style={{ backgroundColor: "#ffff", borderRadius: '100%', padding: '5px', display: 'flex', justifyItems: 'center', alignItems: 'center', cursor: 'pointer' }}>
                        <FaInstagram size={25} />
                    </div>
                    <div style={{ backgroundColor: "#ffff", borderRadius: '100%', padding: '5px', display: 'flex', justifyItems: 'center', alignItems: 'center', cursor: 'pointer' }}>
                        <FaYoutube size={25} />
                    </div>
                    <div style={{ backgroundColor: "#ffff", borderRadius: '100%', padding: '5px', display: 'flex', justifyItems: 'center', alignItems: 'center', cursor: 'pointer', }}>
                        <FaGooglePlusG size={25} />
                    </div>




                </div>

                <ul style={{display : 'flex' ,justifyItems : 'center' ,alignItems : 'center', listStyle : 'none', gap : " 25px", justifyContent:'center' ,backgroundColor: '#111111' ,color:'#ffff' , paddingBottom : '50px' }}>
                    <li style={{cursor : 'pointer'}}>Home</li>
                    <li style={{cursor : 'pointer'}}>News</li>
                    <li style={{cursor : 'pointer'}}>Contact us</li>
                    <li style={{cursor : 'pointer'}}>About</li>
                </ul>

                <div style={{ backgroundColor: '#000000', color: 'white', padding: '5px 0px' }}>

                    Copyright ©{new Date().getFullYear()} Design by Shukumar.
                </div>
            </Footer>
    );
};

export default Foter;