import './temoignage.css';
import { Carousel,Figure} from 'react-bootstrap';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa6";

var carouselitem = [
    {
        id:0,
        image :require('../media/user.jpeg'),
        nom : 'MBE IDRISS FRANCK',
        location :'Residence permanente, Canada',
        message : 'Tout simplement incroyable ! Fast And Sure Travel a rendu mon expérience de demande de visa tellement plus facile et sans stress. Leur équipe professionnelle et attentionnée a guidé chaque étape du processus, m\'offrant des conseils précieux et une assistance personnalisée. Grâce à eux, j\'ai pu obtenir mon visa études pour l\'Europe sans aucun problème. Je recommande vivement leurs services à tous ceux qui envisagent de voyager à l\'étranger',
        
    },
    {
        id:1,
        image :require('../media/user.jpeg'),
        nom : 'FIAYO',
        location :'Permis d\'étude, Canada',
        message : 'Fast And Sure Travel a été un véritable sauveur pour moi lorsque j\'ai dû obtenir mon visa tourisme pour le Schengen. Leur équipe compétente m\'a guidé à travers toutes les étapes du processus et a répondu à toutes mes questions avec patience. Grâce à eux, j\'ai pu réaliser mon rêve de voyager en Europe en toute tranquillité d\'esprit.',
        
    },
    {
        id:1,
        image :require('../media/user.jpeg'),
        nom : 'ATANGANA Herve',
        location :'Tourisme, France',
        message : 'Je tiens à exprimer ma gratitude envers Fast And Sure Travel pour leur excellent service dans l\'obtention de mon visa d\'études pour les États-Unis. Leur équipe professionnelle m\'a fourni des conseils précieux et a traité ma demande avec efficacité. Je les recommande sans hésitation à tous ceux qui cherchent une assistance visa fiable et de qualité.',
        
    },
]
function Temoignage(){
    return (
        <div>
            <hr className="my-5" />
            <div className='section-title'>
                <h2 className='fast-titre'> Témoignages</h2> 
            </div>
            <p className='lead about-fast'>
                Ce que disent nos clients satisfaits : découvrez leurs témoignages inspirants sur notre service d'assistance visa. Rejoignez notre communauté de voyageurs confiants et découvrez comment Fast And Sure Travel peut transformer votre expérience de demande de visa.
            </p> 
            <Carousel className='carousel-temoignage' fade>
                {
                    carouselitem.map(mbe=>{
                        return(
                            <Carousel.Item key={mbe.id}>
                                <Figure>
                                    <Figure.Image 
                                        width={200}
                                        height={200}
                                        alt='Fast and  sure travel sarl témoignage assistance visa'
                                        src={mbe.image} rounded
                                        />
                                    <Figure.Caption>
                                        <h3>{mbe.nom}</h3>
                                        <h5>{mbe.location}</h5>
                                    </Figure.Caption>
                                    <p className='text-temoignage'><FaQuoteLeft />{mbe.message}<FaQuoteRight/></p>
                                </Figure>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default Temoignage;