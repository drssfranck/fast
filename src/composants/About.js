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
    poste :'Directeur Marketing et de Communication',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/fred.jpg')

}

,{
    id:'3',
    nom:'BABOGA ',
    poste :'Chargée clientéle',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/slide2.jpg')

}
,{
    id:'4',
    nom:'HUM ',
    poste :'Chargée clientéle',
    facebook:'',
    twitter :'',
    linkedin:'',
    imagea :require('../media/slide1.jpg')

}
]
/*


                
                <div className="jumbotrons text-center">
                        <h1 className=''>Qui sommes nous ?</h1> 
                </div>
                <p className='lead about-fast'>
                    <b>FAST AND SURE TRAVEL.SARL</b> offre une assistance complète en matière de visas et de réservation de billets d'avion pour les Camerounais désireux de voyager à l'étranger. Nous facilitons les démarches liées à l'immigration, au tourisme, aux études et au travail à travers nos services personnalisés. Avec notre expertise, nous simplifions le processus pour que nos clients puissent concrétiser leurs projets de voyage en toute confiance. Contactez-nous dès aujourd'hui pour une expérience de voyage sans tracas
                </p>
                <div className=''>
                <section className="section_all bg-light" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title_all text-center">
                                    <h3 className="font-weight-bold">FAST AND SURE TRAVEL<span className="text-custom">SARL</span></h3>
                                    <p className="section_subtitle mx-auto text-muted">Nous sommes votre partenaire de confiance pour toutes vos demandes de visa et réservations de billets d'avion.</p>
                                    <div className="">
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row vertical_content_manage mt-5 text-center">
                            <div className="col-lg-6">
                                <div className="about_header_main mt-3">
                                    <div className="about_icon_box">
                                        <p className="text_custom font-weight-bold">FAST AND SURE TRAVEL SARL</p>
                                    </div>
                                    <p className="text-muted mt-3">Que vous cherchiez des vols directs, des itinéraires flexibles ou des billets de classNamee affaires, nous avons ce qu'il vous faut, et nous trouverons votre billet à l'heure qu'il faut..</p>

                                    <p className="text-muted mt-3"> 
                                    Fast and Sure Travel est votre partenaire de confiance pour obtenir rapidement et efficacement votre visa étudiant pour étudier à l'étranger. Nous comprenons les défis auxquels les étudiants sont confrontés lorsqu'il s'agit de visas, c'est pourquoi nous simplifions tout le processus pour vous.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="img_about mt-3">
                                    <Image src={image} alt="" fluid classNameName="mx-auto d-block image-folefack" roundedCircle/>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-4">
                                <div className="about_content_box_all mt-3">
                                    <div className="about_detail text-center">
                                        <div className="about_icon">
                                            <i className="fas fa-pencil-alt"></i>
                                        </div>
                                        <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Notre Histoire</h5>
                                        <p className="edu_desc mt-3 mb-0 text-muted">Depuis notre création en novembre 2021 à Yaoundé, nous avons évolué pour devenir un acteur majeur dans l'industrie du voyage et des visas. Notre engagement envers la satisfaction du client est au coeur de notre succès.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="about_content_box_all mt-3">
                                    <div className="about_detail text-center">
                                        <div className="about_icon">
                                            <i className="fab fa-angellist"></i>
                                        </div>
                                        <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Notre équipe</h5>
                                        <p className="edu_desc mb-0 mt-3 text-muted">Nos professionnels expérimentés sont là pour vous offrir le meilleur service possible. Rencontrez l'équipe derrière Fast and Sure Travel.. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="about_content_box_all mt-3">
                                    <div className="about_detail text-center">
                                        <div className="about_icon">
                                            <i className="fas fa-paper-plane"></i>
                                        </div>
                                        <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Nos valeurs</h5>
                                        <p className="edu_desc mb-0 mt-3 text-muted">
                                        La qualité, la confiance et la rapidité sont les piliers de notre entreprise. Nous nous engageons à fournir des solutions de voyage exceptionnelles. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                






*/



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
                                <div className="item" key={maiva.id}>
                                    <div className="front">
                                        <Image id="team1" className="team" src={maiva.imagea} />
                                    </div>
                                    <div className="back">
                                        <p className="title">{maiva.nom}</p>
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