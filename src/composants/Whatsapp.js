import './whatsapp.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';


function Whatsapp(){
    return (
        <div className='whatsapp-contact'>
            <a className='link-fast' href='http://wa.me/237696369115'><AiOutlineWhatsApp className='whatsapp-fast'/>
            <span className='long-text'>Whatsapp</span>
            </a>
        </div>
    );
}
export default Whatsapp;