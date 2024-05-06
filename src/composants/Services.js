import './service.css';

import { PiPlanetBold } from 'react-icons/pi';
import { GiBuyCard } from 'react-icons/gi';
import { BiPackage } from 'react-icons/bi';
import { FaPlane } from 'react-icons/fa';


function Services(){
    return (
        <>
        <div>
            <hr className="my-5" />
            <div className='section-title'>
                <h2 className='fast-titre'> Nos Services</h2> 
            </div>
        </div>

        <section className="we-offer-area text-center bg-gray">
        <div className="container">
                <div className="row our-offer-items less-carousel">

                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <PiPlanetBold className="fas fa-pen-fancy"/>
                            <h4>Assistance visa</h4>
                            <p>
                            Nous simplifions le processus d’obtention de visa à l’étranger. Notre équipe vous guide à chaque étape de la procédure.                             </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <FaPlane className="fas fa-dharmachakra"/>
                            <h4>Vente de billets d’avion </h4>
                            <p>
                            Grace à notre GDS IATA, nous vous proposons les meilleurs itinéraires aux meilleurs prix. 
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <BiPackage className="fas fa-tasks"/>
                            <h4>Envoi des colis </h4>
                            <p>
                            Nous expédions vos colis en toute sécurité de la Chine vers le Cameroun grâce notre service fiable et rapide.                             </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <GiBuyCard className="fas fa-tachometer-alt"/>
                            <h4>Faire les achats en chine</h4>
                            <p>
                               Facilitez vos achats en Chine avec notre expertise pour trouver les meilleurs fournisseurs, négocier les prix et organiser l'expédition.
                            </p>
                        </div>
                    </div>

                    
                </div>
        </div>
    </section>



        </>
    )
}

export default Services;