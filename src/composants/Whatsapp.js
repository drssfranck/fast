import './whatsapp.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';


function Whatsapp(){
    return (
        <div className='whatsapp-contact'>
            <a className='link-fast' href='http://wa.me/237696369115'><AiOutlineWhatsApp className='whatsapp-fast'/></a>
        </div>
    );
}
export default Whatsapp;