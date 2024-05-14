import {FaPlane} from 'react-icons/fa';
import React from 'react';
import './fly.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Fly extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            villed :'',
            villedError :false,
            villea :'',
            villeaError :false,
            dated:'',
            datedError:false,
            datea:'',
            dateaError:false,
            nbrea:'',
            nbreado:'',
            nbreen:'',
            name:'',
            nameError:false,
            telephone:'',
            telephoneError:false,
            email:'',
            emailError:false,
            emailError2:false,
            allerRetour :false,
        }

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleBlur   = this.handleBlur.bind(this);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    handleBlur(e) {
     
            const name = e.target.name; 
            const value = e.target.value;
      
            this.setState({ [name]: value  });
            //controle de la ville de départ
            if (value.length <= 0 && (name ==='villed')) {
              this.setState({ villedError: true });
            } else {
              this.setState({ villedError: false });
            } 
            //controle de la ville d'arrivée
            if (value.length <= 0 && (name === 'villea')) {
               this.setState({ villeaError: true });
            } else {
                this.setState({ villeaError: false });
            } 
            //controle de la date de depart
            if (value.length <= 0 && (name === 'dated')) {
                this.setState({ datedError: true });
            } else {
                this.setState({ datedError: false });
            } 
            //controle de la date d'arrivé

            const dataa =  document.getElementById('datea');
            if ((value.length <= 0 && (name === 'datea')) || !dataa.hasAttribute('disabled')) {
                this.setState({ dateaError: true });
            } else {
                this.setState({ dateaError: false });
            } 
            //controle du nom
            if (value.length <= 0 && (name === 'name')) {
                this.setState({ nameError: true });
            } else {
                this.setState({ nameError: false });
            } 
            //controle du téléphone
            if (value.length <= 0 && (name === 'telephone')) {
                this.setState({ telephoneError: true });
            } else {
                this.setState({ telephoneError: false });
            } 

            //controle de l'adresse Email
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
      
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value  });
    }
    
    onChang(e){
        const dataa =  document.getElementById('datea');
       if(dataa.hasAttribute('disabled')){
        dataa.removeAttribute('disabled')
       }else{
        dataa.setAttribute('disabled','');
       }
    }

    handleSubmit(e) {
        const { villed, villea, dated, datea, name,telephone,email,villedError,villeaError,datedError,dateaError,nameError,telephoneError,emailError,emailError2} = this.state;
        
        this.setState({ villedError: villed ? false : true });
        this.setState({ villeaError: villea ? false : true });

        this.setState({ datedError: dated ? false : true });
        this.setState({ dateaError: datea ? false : true });

        this.setState({ telephoneError: telephone ? false : true });
        this.setState({ nameError: name ? false : true });




        if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }
        
  
        if (name && email && villea && villed && dated && datea && telephone && !nameError && !emailError && !emailError2 && !dateaError && !datedError && !villeaError && !villedError && !telephoneError) {
          this.setState({ formValid: true });
        } else {
          this.setState({ formValid: false });
        }
  
        e.preventDefault(); 
      }

    render(){
        const { villedError,villeaError,datedError,dateaError,nameError,telephoneError,emailError,emailError2,formValid} = this.state;
        
        if (!formValid) {
            return(
                <>
                <div className="container-fly">
                        <h1 className='h1-fly'><FaPlane className="fa fa-plane icon"/>Demandez une reservation de votre billet d'avion</h1>
                        <Form className='form-fly' action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                        <h2 className="fly-infovol">Information sur le vol :</h2>
                        <div className='row'> 
                            <Col className='' sm={4}>
                                <FloatingLabel className='label-fly' label='Ville de départ' htmlFor="villdepart" >
                                    <Form.Control type='text' placeholder='' name='villed' value={this.state.villed} id='villdepart' onChange={this.handleChange} onBlur={this.handleBlur} />
                                </FloatingLabel>
                                    { villedError
                                        ? <div className="alert alert-danger mt-2">Veuillez Entrer la ville de départ</div>
                                        : ''
                                    }
                            </Col>
                            <Col className='' sm={4}>
                                <FloatingLabel className='label-fly' label='Destination(Pays ou ville)' htmlFor="villeA" >
                                    <Form.Control type='text' placeholder='' name='villea' value={this.state.villea} id='villeA'  onChange={this.handleChange} onBlur={this.handleBlur}  />
                                </FloatingLabel>
                                { villeaError
                                        ? <div className="alert alert-danger mt-2">Veuillez Entrer la destination (Ville ou pays d'arriver)</div>
                                        : ''
                                }
                            </Col>
                            <Col className='' sm={4}>
                                <Form.Check 
                                    onChange={this.onChang}
                                    onBlur={this.handleBlur}
                                    name=''
                                    value={this.state.allerRetour}
                                    type="switch"
                                    id="custom-switch"
                                    label="Aller/Retour"
                                    
                                />
                            </Col>
                            <Col className='' sm={6}>
                                <FloatingLabel className='label-fly' label='date de depart' htmlFor="dated" >
                                    <Form.Control type='date' placeholder='' name='dated' value={this.state.dated} id='dated' onChange={this.handleChange} onBlur={this.handleBlur} />
                                </FloatingLabel>
                                { datedError
                                        ? <div className="alert alert-danger mt-2">Veuillez choisir une date</div>
                                        : ''
                                }
                            </Col>
                            <Col className='' sm={6}>
                                <FloatingLabel className='label-fly' label='date de retour' htmlFor="datea" >
                                    <Form.Control type='date' placeholder='' name='datea' disabled value={this.state.datea} id='datea' onChange={this.handleChange} onBlur={this.handleBlur}/>
                                </FloatingLabel>
                                { dateaError
                                        ? <div className="alert alert-danger mt-2">Veuillez choisir une date</div>
                                        : ''
                                }
                            </Col>
                            <Col className='' sm={4}>
                            <FloatingLabel className='label-fly' label='Nombre d`adulte' htmlFor="nbrea" >
                                <Form.Control type='number' placeholder='' name='nbrea' value={this.state.nbrea} id='nbrea' onChange={this.handleChange} onBlur={this.handleBlur}/>
                            </FloatingLabel>
                            </Col>
                            <Col className='' sm={4}>
                            <FloatingLabel className='label-fly' label='Nombre d`adolescent' htmlFor="nbreado" >
                                <Form.Control type='number' placeholder='' name='nbreado' value={this.state.nbreado} id='nbreado' onChange={this.handleChange} onBlur={this.handleBlur}/>
                            </FloatingLabel>
                            </Col>
                            <Col className='' sm={4}>
                            <FloatingLabel className='label-fly' label='Nombre d`enfant' htmlFor="nbreen" >
                                <Form.Control type='number' placeholder='' name='nbreen' value={this.state.nbreen} id='nbreen' onChange={this.handleChange} onBlur={this.handleBlur} />
                            </FloatingLabel>
                            </Col>
                            
                            <h2 className="fly-infovol">Information personnel:</h2><br/>
        
                            <div className='row'>
                            <Col className='' sm={6}>
                            <FloatingLabel className='label-fly' label='nom complet' htmlFor="name" >
                                <Form.Control type='text' placeholder='' name='name' value={this.state.name} id='name' onChange={this.handleChange} onBlur={this.handleBlur} />
                            </FloatingLabel>
                                { nameError
                                        ? <div className="alert alert-danger mt-2">Veuillez Entrer Votre nom</div>
                                        : ''
                                }
                            </Col>
                            
                            <Col className='' sm='6'>
                            <FloatingLabel className='label-fly' label='Téléphone' htmlFor="telephone" >
                                <Form.Control type='tel' placeholder='' name='telephone' value={this.state.telephone} id='telephone' onChange={this.handleChange} onBlur={this.handleBlur} />
                            </FloatingLabel>
                                 { telephoneError
                                        ? <div className="alert alert-danger mt-2">Veuillez Entrer votre numéro de téléphone</div>
                                        : ''
                                }
                            </Col>
                            <Col className='' sm='12'>
                            <FloatingLabel className='label-fly' label='Adresse email' htmlFor="email" >
                                <Form.Control type='email' placeholder='' name='email' value={this.state.email} id='email' onChange={this.handleChange} onBlur={this.handleBlur}/>
                            </FloatingLabel>
                                { emailError
                                    ? <div className="alert alert-danger mt-2">Adresse Email obligatoire</div>
                                    : ''
                                }
                                { emailError2
                                    ? <div className="alert alert-danger mt-2">Adresse Email invalide</div>
                                    : ''
                                }
                            </Col>
                            <Col className='' sm='12'>
                                 <p className="text-center mb-0">
                                    <Button type="submit" className='btn btn-primary btn-lg w-100 text-uppercase'>Envoyez</Button>
                                </p>
                            </Col>
        
                        
                        </div>
                        </div>
                        </Form>
        
                </div>
            </>
            )
        }else{
            return (
                <div className="thankyou_details">
                  <div className="alert alert-success mt-3">Mail sent successfully.{this.state.name}</div>
                </div>
            )
        }
    }
    
    

}



export default Fly;