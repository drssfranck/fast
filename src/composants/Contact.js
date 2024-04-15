
import { FaGlobe, FaMarker, FaPlane } from 'react-icons/fa';
import './contact.css';
import { AiOutlineRocket } from 'react-icons/ai';
import { PiPhone } from 'react-icons/pi';

function Contact(){
    return (
        <div>
            <h3 className='title'>Laissez nous un message</h3>
            <div className='wrapper'>
                <div className='row mb-5'>
                <div className="col-md-3">
                <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                
                <FaMarker className='fa-contact'/>
                </div>
                <div className="text">
                <p><span><b>Yaoundé</b>:</span>Scalom (côté d'EHSschool) </p>
                <p><span><b>Douala</b>:</span>Carrefour Agip (Face Afrique construction) </p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                <PiPhone className='fa-contact'/>
                </div>
                <div className="text">
                <p><span>Yaoundé:</span> <a href="tel://681488180">+ 237 681 488 180</a></p>
                <p><span>Douala:</span> <a href="tel://676246851">+ 237 676 246 851</a></p>
                </div>
                </div>
                </div>
               
                <div className="col-md-3">
                <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                <FaPlane className='fa-contact'/>
                </div>
                <div className="text">
                <p><span>Email:</span> <a href="mailto:fasttravels@outlook.fr">fasttravels@outlook.fr</a></p>
                </div>
                </div>
                </div>
                

                <div className="col-md-3">
                <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                <FaGlobe className='fa-contact' />
                </div>
                <div className="text">
                <p><span>Website</span> <a href="fasttravels.org">fasttravels.org</a></p>
                </div>
                </div>
                </div>
                </div>

            <div className="container contact-form">
            <div className="contact-image">
                <AiOutlineRocket className='contact-titre'/>
            </div>
            <form method="post">
                
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Votre nom*" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Votre email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Votre numéro de téléphone *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Envoyez" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control zone-saisie" placeholder="Votre message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>

            <section class="map_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="map_inner">
                                <h4>Find Us on Google Map</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                <div class="map_bind">
                                    <iframe className='carte-fast' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63693.31161348743!2d11.456576169727347!3d3.8462202478754905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xa985ca4ebc00726f%3A0x302abe9efd12c4a8!2sScalom%2C%20Yaound%C3%A9!3m2!1d3.8461355999999998!2d11.4977758!5e0!3m2!1sfr!2scm!4v1712839649070!5m2!1sfr!2scm" width="100%" height="450" frameborder="0"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;