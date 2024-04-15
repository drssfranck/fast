import './about.css';
import {Image} from 'react-bootstrap';
import image from '../media/alex.jpg';
function About(){
    return (
        <>
                <hr className="my-5" />
                <div className='section-title'>
                    <h2 className='fast-titre'>Qui sommes nous ?</h2> 
                </div>
                <p className='lead about-fast'>
                    <b>FAST AND SURE TRAVEL.SARL</b> offre une assistance complète en matière de visas et de réservation de billets d'avion pour les Camerounais désireux de voyager à l'étranger. Nous facilitons les démarches liées à l'immigration, au tourisme, aux études et au travail à travers nos services personnalisés. Avec notre expertise, nous simplifions le processus pour que nos clients puissent concrétiser leurs projets de voyage en toute confiance. Contactez-nous dès aujourd'hui pour une expérience de voyage sans tracas
                </p>
                <div className=''>
                <section class="section_all bg-light" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section_title_all text-center">
                                    <h3 class="font-weight-bold">FAST AND SURE TRAVEL<span class="text-custom">SARL</span></h3>
                                    <p class="section_subtitle mx-auto text-muted">Nous sommes votre partenaire de confiance pour toutes vos demandes de visa et réservations de billets d'avion.</p>
                                    <div class="">
                                        <i class=""></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row vertical_content_manage mt-5 text-center">
                            <div class="col-lg-6">
                                <div class="about_header_main mt-3">
                                    <div class="about_icon_box">
                                        <p class="text_custom font-weight-bold">FAST AND SURE TRAVEL SARL</p>
                                    </div>
                                    <p class="text-muted mt-3">Que vous cherchiez des vols directs, des itinéraires flexibles ou des billets de classe affaires, nous avons ce qu'il vous faut, et nous trouverons votre billet à l'heure qu'il faut..</p>

                                    <p class="text-muted mt-3"> 
                                    Fast and Sure Travel est votre partenaire de confiance pour obtenir rapidement et efficacement votre visa étudiant pour étudier à l'étranger. Nous comprenons les défis auxquels les étudiants sont confrontés lorsqu'il s'agit de visas, c'est pourquoi nous simplifions tout le processus pour vous.</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img_about mt-3">
                                    <Image src={image} alt="" fluid class="mx-auto d-block image-folefack" thumbnail/>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-lg-4">
                                <div class="about_content_box_all mt-3">
                                    <div class="about_detail text-center">
                                        <div class="about_icon">
                                            <i class="fas fa-pencil-alt"></i>
                                        </div>
                                        <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Notre Histoire</h5>
                                        <p class="edu_desc mt-3 mb-0 text-muted">Depuis notre création en novembre 2021 à Yaoundé, nous avons évolué pour devenir un acteur majeur dans l'industrie du voyage et des visas. Notre engagement envers la satisfaction du client est au coeur de notre succès.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="about_content_box_all mt-3">
                                    <div class="about_detail text-center">
                                        <div class="about_icon">
                                            <i class="fab fa-angellist"></i>
                                        </div>
                                        <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Notre équipe</h5>
                                        <p class="edu_desc mb-0 mt-3 text-muted">Nos professionnels expérimentés sont là pour vous offrir le meilleur service possible. Rencontrez l'équipe derrière Fast and Sure Travel.. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="about_content_box_all mt-3">
                                    <div class="about_detail text-center">
                                        <div class="about_icon">
                                            <i class="fas fa-paper-plane"></i>
                                        </div>
                                        <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Nos valeurs</h5>
                                        <p class="edu_desc mb-0 mt-3 text-muted">
                                        La qualité, la confiance et la rapidité sont les piliers de notre entreprise. Nous nous engageons à fournir des solutions de voyage exceptionnelles. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                
        </>
    )
}

export default About;