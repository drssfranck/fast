import './aboutus.css';

import Image from 'react-bootstrap/Image';

import image1 from '../media/slide1.jpg';
import image2 from '../media/slide2.jpg';
import image3 from '../media/slide4.jpg';
import image4 from '../media/fred.jpg';

const Aboutus = () =>{
    return (
        <>
        <hr className="my-5" />
                <div className='section-title'>
                    <h2 className='fast-titre'>Qui sommes nous ?</h2> 
                </div>
        <div className='container aboutconatainer'>
            <div className='contentLeft'>
                <div className='row'>
                    <div className='imgWrapper'>
                        <Image src={image1} />
                    </div>
                    <div className='imgWrapper'>
                        <Image src={image2} />
                    </div>
                    <div className='imgWrapper'>
                        <Image src={image3} />
                    </div>
                    <div className='imgWrapper'>
                        <Image src={image4} />
                    </div>
                </div>
            </div>
            
                <div className='contentRight'>
                    <div className='content'>
                    <div className="container-welcome">
                        <span className="text1"> BIENVENU à </span>
                        <span className="text2">
                        FAST AND SURE TRAVEL SARL
                        </span>
                    </div>
                        <p className='d-flex justify-content-between'>
                        <b>FAST AND SURE TRAVEL.SARL</b> est une entreprise spécialisée dans l’assistance Visa, la billetterie et le transport des marchandises. Elle a été créée en octobre 2021, dans le but principal de faciliter les demandes liées aux voyages internationaux. 
                        </p>
                        <a href='/about'>Lire plus</a>
                    </div>
                </div>
            
        </div>
        </>
    )
}
export default Aboutus;