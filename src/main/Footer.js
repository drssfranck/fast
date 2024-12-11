import './footer.css';
import logo from '../media/logo.png';
import { Image} from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () =>{
    return (
            <div className="section my-5">

                    <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#2c3e90'}}>

                        <section
                                className="d-flex justify-content-between p-4"
                                style={{backgroundColor: '#6351ce'}}
                                >


                            <div className="me-5">
                                <span>Réseau social</span>
                            </div>


                            <div>
                                <a target='blank' href="https://www.facebook.com/fastandsuretravel22" className="text-white me-4">
                                <FaFacebook className='fab' />
                                </a>
                                
                                <a target='blank' href="fasttravel.org" className="text-white me-4">
                                    <FaGoogle className='fa' />
                                </a>
                                <a target='blank' href="https://www.instagram.com/fastsuretravel/" className="text-white me-4">
                                <FaInstagram className='fab' />
                                </a>
                                <a target='blank' href="wa.me/237686989629" className="text-white me-4">
                                    <FaWhatsapp className='fab' />
                                </a>
                                
                            </div>

                        </section>


                        <section className="">
                            <div className="container text-center text-md-start mt-5">

                                <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-3">

                                    <h6 className="text-uppercase fw-bold">FAST AND SURE TRAVEL .SARL</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px',backgroundColor: '#7c4dff', height: '2px'}}
                                        />
                                    <p>
                                        Nous offrons une panoplie de services en lien avec le voyage tels que : L'assistance visa, l'achat de billet d'avion, etc...
                                    </p>
                                    <Image roundedCircle className='logo-footer' src={logo} alt='fast and sure travel' />
                                </div>


                                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Nos services</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}/>
                                    <p>
                                    <a href="/immigration" className="text-white">Assistance Visa</a>
                                    </p>
                                    <p>
                                    <a href="/flyticket" className="text-white">Vente De Billets D’avion</a>
                                    </p>
                                    <p>
                                    <a href="#!" className="text-white">Envoi Des Colis</a>
                                    </p>
                                    <p>
                                    <a href="#!" className="text-white">Faire Les Achats En Chine</a>
                                    </p>
                                </div>


                                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Heure d'ouverture</h6>


                                    
                                        

                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                                        />

                                        <p className='fast-service text-center'>
                                            Nous travaillons de Lundi à samedi. Contactez-nous en cas d'urgence, avec notre Hotline et notre formulaire de contact.
                                        </p>

                                    <p>
                                    <b>Lundi à Vendredi</b>
                                    </p>
                                    <p>
                                        08h00 - 17h30
                                    </p>
                                    <p>
                                    <b>Samedi et jours fériés</b>
                                    </p>
                                    <p>
                                    08h00 - 13h00
                                    </p>
                                
                                </div>
                                </div>

                            </div>
                        </section>
                        <div
                            className="text-center p-3"
                            style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
                            >
                        © 2024 Copyright &nbsp;
                        <a className="text-white" href="https://delorscompany.com/"
                            >Fast And Sure Travel</a
                            >
                        </div>
                    </footer>

            </div>
    )
}

export default Footer;