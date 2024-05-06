import './whatsapp.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';


function Whatsapp(){
    return (
        <div className='whatsapp-contact'>
            <a className='link-fast' href='http://wa.me/237676246851'><AiOutlineWhatsApp className='whatsapp-fast'/>
            </a>
        </div>
    );
}
export default Whatsapp;