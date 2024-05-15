import './whatsapp.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';


function Whatsapp(){
    return (
        <div className='whatsapp-contact'>
            <a target='blank' className='link-fast' href='http://wa.me/237686989629'><AiOutlineWhatsApp className='whatsapp-fast'/>
            </a>
        </div>
    );
}
export default Whatsapp;