import './footer.css';
import logo from '../media/logo.png';
import { Image} from 'react-bootstrap';
import {BsFacebook, BsTwitterX, BsTiktok,BsInstagram} from 'react-icons/bs';

const Footer = () =>{
    return (
        <div>
        <div fixed="bottom"  className=' footer fast-footer'>
            <div className='left-foot'>
                <h3 className='widget-title'>A propos de nous</h3>
                <hr style={{height:'5px'}}/>
                <Image className='logo-footer'  src={logo} thumbnail alt='logo fast and sure travel'/>
                <p className='fast-service'>
                    Nous offrons une panoplie de services en lien avec le voyage tels que : L'assistance visa, l'achat de billet d'avion, etc...
                </p>
                <span className='align-items social-foot'><a href='facebook.com' className='social-fast'><BsFacebook/></a><a href='facebook.com' className='social-fast'><BsInstagram/></a>
                <a href='facebook.com' className='social-fast'><BsTiktok/></a><a href='facebook.com' className='social-fast'><BsTwitterX/></a></span>
            </div>
            <div className='left-foot'>
                <h3 className='widget-title'>Heure d'ouverture</h3>
                <hr style={{height:'5px'}}/>
                <p className='fast-service'>
                    Nous travaillons de Lundi à samedi, tous les jours hors jours fériés. Contactez-nous en cas d'urgence, avec notre Hotline et notre formulaire de contact.
                </p>
                <ul className='daywork' type='none'>
                    <li><b>Lundi à Vendredi</b></li>
                    <li>08h00 - 17h30</li>
                    <li><b>Samedi et jours fériés</b></li>
                    <li>09h00 - 15h00</li>
                </ul>

            </div >
            <div  className='left-foot'>
                <h3 className='widget-title'>Services</h3>
                <hr style={{height:'5px'}}/>
                <span className='daywork' type='none'>
                    <a href='visa'>Assistance visa</a><br/>
                    <a href='visa'>Billet d'avions</a><br/>
                    <a href='visa'>Envoyez des colis</a><br/>
                    <a href='visa'>Achat des marchandises en chine</a><br/>
                </span>
            </div>
            <div className='align-items-center footer-foot'>
                <p>
                Made by franck MBE @2021
                </p>
            </div>
        </div>
        </div>
    )
}

export default Footer;