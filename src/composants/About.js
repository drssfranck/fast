import './about.css';
import {Image} from 'react-bootstrap';
import image from '../media/alex.jpg';
import img from '../media/avom.jpg';
import img1 from '../media/fiayo.jpg';
import img2 from '../media/banière.png';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

var team = [{
    id:'0',
    nom : 'FOLEFACK ALEX',
    poste : 'Directeur Géneral',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/alex.jpg')
},{
    id:'1',
    nom:'NGUIMKENG G. FRED',
    poste :'Directeur Marketing et Commerçial',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/fred.jpg')

}

,{
    id:'3',
    nom:'Mlle BABOGA MARINA',
    poste :'Chargée clientéle',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/slide2.jpg')

}
,{
    id:'4',
    nom:'Mlle UMM MICHELE  ',
    poste :'ASSISTANTE MARKETING ET COMMERCIALE',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/slide1.jpg')

}
,{
    id:'5',
    nom:'M. YONKEU ERIC',
    poste :'DIRECTEUR TECHNIQUE',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/Yonkeu.JPG')

}
,{
    id:'6',
    nom:'M. OBAME HUGUE',
    poste :'ASSISTANT DU DIRECTEUR TECHNIQUE',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/Obame.JPG')

}
,{
    id:'7',
    nom:'M. ESSONO AMBROISE',
    poste :'ASSISTANT DU DIRECTEUR TECHNIQUE',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/essono.JPG')

}
]

function About(){
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-4 align-items-center justify-content-between">
                        <div className="col-md-5 order-2 order-md-1">
                            <div className="mt-5 mt-md-0">
                                <span className="text-muted"></span>
                                <h2 className="display-5 fw-bold">A propos de nous </h2>
                                <p className="lead">Nous sommes votre partenaire de confiance pour toutes vos demandes de visa et réservations de billets d'avion.</p>
                                <p className="lead">Fast and Sure Travel est votre partenaire de confiance pour obtenir rapidement et efficacement votre visa étudiant pour étudier à l'étranger. Nous comprenons
                                 les défis auxquels les étudiants sont confrontés lorsqu'il s'agit de visas, c'est pourquoi nous simplifions tout le processus pour vous.</p>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 order-1 order-md-2">
                            <div className="row gx-2 gx-lg-3">
                                <div className="col-6">
                                    <div className="mb-2"><Image className="img-fluid rounded-3" src={image} /></div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2"><Image className="img-fluid rounded-3" src={img} /></div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2"><Image className="img-fluid rounded-3" src={img1} /></div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-2"><Image className="img-fluid rounded-3" src={img2} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div id="container">
                    <div id="heading">
                        <h1>NOTRE EQUIPE</h1>
                    </div>
                    {
                        team.map(maiva =>{
                            return(
                                <div className="item tango" key={maiva.id}>
                                    <div className="front">
                                        <Image id="team1" className="team" src={maiva.imagea} />
                                    </div>
                                    <div className="back">
                                        <p className="title-name">{maiva.nom}</p>
                                        <p className="job">{maiva.poste}</p>
                                        <a href="facebook.com"><FaFacebook className="fab fa-facebook social fa-2x"/></a>
                                        <a href="linkedin.com"><FaLinkedin className="fab fa-linkedin social fa-2x"/></a>
                                        <a href="twitter.com"><FaTwitter className="fab fa-twitter social fa-2x"/></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        
        </>
    )
}

export default About;