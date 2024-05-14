import  React from 'react';

import { FaGlobe, FaMarker, FaPlane } from 'react-icons/fa';
import './contact.css';
import { AiOutlineRocket } from 'react-icons/ai';
import { PiPhone } from 'react-icons/pi';
import emailjs from '@emailjs/browser';

class Contact extends React.Component{
    
    constructor(props){
        super(props); 
        this.state = {
            message :'',
            messageError:false,
            name:'',
            nameError: false,
            email:'',
            EmailError:false,
            EmailError2:false,
            telephone:'',
            telephoneError:false,
        }
        this.formRef  = React.createRef();
        
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }


    handleBlur = e => {
     
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({ [name]: value  });

        // message
        if (value.length <= 0 && (name ==='message')) {
            this.setState({ messageError: true });
        } else {
            this.setState({ messageError: false });
        }

        //nom 

        if (value.length <= 0 && (name==='name')) {
            this.setState({ nameError: true });
        } else {
            this.setState({ nameError: true });
        }

        //Email

        if (value.length <= 0 && (name === 'email')) {
            this.setState({ emailError: true });
            this.setState({ emailError2: false });
        } else {
            this.setState({ emailError: false });
            if(this.isValidEmail(value)) {
              this.setState({ emailError2: false });  
            } else {
              this.setState({ emailError2: true });  
            }
        } 

         //nom 

        if (value.length <= 0 && (name==='telephone')) {
            this.setState({ telephoneError: true });
        } else {
            this.setState({ telephoneError: true });
        }


    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value  });
    }

    handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm(
            'service_e8fv6sr',
            'template_ujilbqb',
            this.formRef.current,{
              publicKey:'bjr0H5ryxdXjWco4r'
              
            }).then(
              ()=>{
                alert("Envoyé avec succes");
              },
              (error)=>{
                alert('Erreur ..... '+ error.text );
              }
            )
    }
    render(){
        
        const {messageError,emailError,emailError2} = this.state;
        return(
            <div>
                <h3 className='titlea text-center'>Laissez nous un message</h3>
                <div className='wrapper'>
                    <div className='row maiva-idriss'>
                        <div className="col-md-3 maiva-acer">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                
                                <   FaMarker className='fa-contact'/>
                                </div>
                                <div className="text">
                                    <p><span><b>Yaoundé</b>:</span>Scalom (côté d'EHSschool) </p>
                                    <p><span><b>Douala</b>:</span>Carrefour Agip (Face Afrique construction) </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 maiva-acer">
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
                    
                        <div className="col-md-3 maiva-acer">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FaPlane className='fa-contact'/>
                                </div>
                                    <div className="text">
                                    <p><span>Email:</span> <a href="mailto:fasttravels@outlook.fr">fasttravels@outlook.fr</a></p>
                                </div>
                            </div>
                        </div>
                        
    
                        <div className="col-md-3 maiva-acer">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FaGlobe className='fa-contact ' />
                                </div>
                                <div className="text">
                                    <p><span>Website</span> <a href="fasttravels.org">fasttravels.org</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                <div className="container contact-form">
                <div className="contact-image text-center">
                    <AiOutlineRocket className='contact-titre'/>
                </div>
                <div className='container'>
    
                <div className="m-1">
                    
                    <form id="contact_form" ref={this.formRef}  onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                        <div className="mb-5">
                            <label htmlFor="message"  >Message *</label>
                            <textarea className="form-control" required id="message" name="message" rows="5" onBlur={this.handleBlur} value={this.state.message} onChange={this.handleChange}></textarea>
                            { messageError
                                ? <div className="alert alert-danger mt-2">message obligatoire</div>
                                : ''
                            }
                        </div>
                        <div className="mb-5 row">
                            <div className="col">
                                <label>Votre Nom:</label>
                                <input type="text" required  className="form-control" id="name" name="name"  onBlur={this.handleBlur} value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="email_addr"> Email:</label>
                                <input type="email" required  className="form-control" id="email_addr" name="email"  onBlur={this.handleBlur} value={this.state.email} onChange={this.handleChange}
                                    placeholder="name@example.com" />
                                { emailError
                                    ? <div className="alert alert-danger mt-2">Adresse Email obligatoire</div>
                                    : ''
                                }
                                { emailError2
                                    ? <div className="alert alert-danger mt-2">Adresse Email invalide</div>
                                    : ''
                                }
                            </div>
                            <div className="col">
                                <label > Télephone:</label>
                                <input type="telephone" required  className="form-control" id="telephone" name="telephone" onBlur={this.handleBlur} value={this.state.telephone} onChange={this.handleChange}
                                    placeholder="+237 676 246 851" />
                            </div>
                        </div>
                        <div className="d-grid">
                        <button type="submit" className="btn btn-success">Envoyez</button>
                        </div>
                    </form>
                    </div>
    
                </div>
                </div>
                </div>
    
                <section className="map_sec">
                    <div className="">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="map_inner">
                                    <h4>Trouver nous sur Google Map</h4>
                                    <div className="map_bind">
                                        <iframe className='carte-fast' title='FASTAND SURE TRAVEL' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63693.31161348743!2d11.456576169727347!3d3.8462202478754905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xa985ca4ebc00726f%3A0x302abe9efd12c4a8!2sScalom%2C%20Yaound%C3%A9!3m2!1d3.8461355999999998!2d11.4977758!5e0!3m2!1sfr!2scm!4v1712839649070!5m2!1sfr!2scm" style={{width:'100%', height:'450px', loading:'lazy'}} ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;