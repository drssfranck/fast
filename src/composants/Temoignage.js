import './temoignage.css';
import { Carousel,Image} from 'react-bootstrap';

import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";

var carouselitem = [
    {
        id:0,
        image :require('../media/avom.jpg'),
        nom : 'VISA TOURISME, CANADA ',
        location :'Residence permanente, Canada',
        message : 'Je tiens à exprimer ma gratitude envers FAST AND SURE TRAVEL.SARL pour leur excellent service dans l’obtention de mon visa tourisme pour le CANADA. Leur équipe professionnelle m’a fourni des conseils précieux et a traité ma demande avec efficacité. Je les recommande sans hésitation à tous ceux qui cherchent une assistance visa fiable et de qualité.',
        
    },
    {
        id:1,
        image :require('../media/fiayo.jpg'),
        nom : 'FIAYO MAMA BELLEVIE ',
        location :'VISA ETUDE, CANADA ',
        message : 'Le suivi, les conseils et l’efficacité de<b> FAST AND SURE TRAVEL.SARL</b> sont irréprochables. Grace à eux j’ai pu faire le meilleur choix de procédure et je suis désormais étudiante au CANADA. ',
        
    }  
]
function Temoignage(){
    return (
        <div className='testimonial text-center'>
            <div className='container-temoignage'>
                            <hr className="my-5" />
            <div className='section-title'>
                <h2 className='fast-titre'> Témoignages</h2> 
            </div>
            <p className='d-flex  justify-content-center text-title'>
                Ce que disent nos clients satisfaits : découvrez leurs témoignages inspirants sur notre service d'assistance visa. Rejoignez notre communauté de voyageurs confiants et découvrez comment Fast And Sure Travel peut transformer votre expérience de demande de visa.
            </p> 
            <Carousel  id="testimonial4" className='carousel-temoignage ' data-pause='hover' >
                {
                    carouselitem.map(mbe=>{
                        return(
                            <Carousel.Item className='testimonial4_header tegmoignagei testimonial4_slide' key={mbe.id} >
                                <div className='contenu-temoignage'>
                                    <div className='temoignage-left'>
                                        <Image 
                                            className='img-responsive'
                                            alt='Fast and  sure travel sarl témoignage assistance visa'
                                            src={mbe.image} roundedCircle
                                            />
                                        
                                    </div>
                                    <div className='caption-responsive temoignage-righ'>
                                            <p className='text-temoignage '><FaQuoteLeft />&nbsp;&nbsp; {mbe.message}&nbsp;&nbsp;<FaQuoteRight/></p>
                                            <h4>{mbe.nom}</h4>
                                            <h6>{mbe.location}</h6>
                                    </div>
                                </div>
                                
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>
        </div>
    )
}
export default Temoignage;