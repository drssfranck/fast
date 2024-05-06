import React, { useRef, useState } from 'react';
import { Form, Button, ProgressBar,FloatingLabel } from 'react-bootstrap';
import './openfolder.css';
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';


const Openfolder = () => {
/*Send mail */
const form = useRef();
const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm(
        'service_e8fv6sr',
        'template_esmu9gm',
        form.current,{
          publicKey:'bjr0H5ryxdXjWco4r'
        }).then(
          ()=>{
            handleShow();
          },
          (error)=>{
            alert('Erreur ..... '+ error.text );
          }
        )
};

const [show, setShow] = useState(false);


  const handleClose = () => {setShow(false)

  };
  const handleShow = () => {setShow(true)
    console.log('Bonjour')
  };




  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  var message = `<b>Nom complet :</b>`+formData.user_name +
  ` <br/> <b>Date et Lieux de naissance :</b>`+ FormData.dnais +" à "+formData.lnais + 
  "<br /> <b>Profession :</b>"+formData.profession
  +"<br/><b>Niveau d'étude :</b>"+formData.letude+
  "<br/><b>Type de procédure et Destination :</b>"+formData.motif +"  "+formData.destination
  +"<br /><b>Email : </b>"+FormData.email
  +"<br/><b> Téléphone : </b>"+formData.telephone 
  + "<br /><b> Votre ville d'origine est </b>" +formData.ville 
  + "<br/> <b>Vous avez connu FAST via </b>" +formData.kfast;
    return (
      <>
              <h1>Remplissez notre formulaire d'ouverture de dossier et laissez nos experts vous accompagner</h1>
    <div className='formulaire'>
        <Form ref={form}  className='ouvrir-dossier' method="post">
          <h2>Informations</h2>
            <ProgressBar now={(step / 5) * 100} />
            {step === 1 && (<>
              <Form.Group controlId="formStep1">
                <FloatingLabel controlId="floatingInput" label='Nom et prenom' id="inputGroupPrepend" >
                  <input
                    className='form-control'
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep11">
                  <FloatingLabel label='Date de naissance' className='open-label'>
                    <Form.Control
                      type="date"
                      name='dnais'
                      value={formData.dnais}
                      onChange={handleInputChange}
                      required
                    />
                  </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep1">
                <FloatingLabel label='Lieu de naissance' className='open-label'>
                <Form.Control
                  name='lnais'
                  type="text"
                  value={formData.lnais}
                  onChange={handleInputChange}
                  required
                />
                </FloatingLabel>
              </Form.Group>
            </>
            )}
            {step === 2 && (
              <>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Profession'>
                <Form.Control
                  type="text"
                  value={formData.profession}
                  onChange={handleInputChange}
                  name='profession'
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label="Niveau d'étude">
                <Form.Control
                   name='letude'
                  type="text"
                  value={formData.letude}
                  onChange={handleInputChange}
                />
                </FloatingLabel>
              </Form.Group>
              </>
            )}
            {step === 3 && (
              <>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Pays choisi'>
                <Form.Select defaultValue='Autre' name='destination'  value={formData.destination} onChange={handleInputChange}>
                  <option  value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Roumanie">Roumanie</option>
                  <option value="Russie">Russie</option>
                  <option value="Australie">Australie</option>
                  <option value="Autre">Autre</option>

                </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Motif du voyage'>
                <Form.Select name='motif' defaultValue='Etude' value={formData.motif} onChange={handleInputChange}>
                  <option value="Etude" >Etude</option>
                  <option value="Tourisme">Tourisme</option>
                  <option value="Travail">Travail</option>
                  <option value="Residence permanente">Residence permanente</option>
                </Form.Select>
                </FloatingLabel>
              </Form.Group>
              </>
            )}{step === 4 && (
              <>
                <Form.Group controlId="formStep2">
                <FloatingLabel label='Email'>
                  <Form.Control
                    name='email'
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Numéro de téléphone'>
                <Form.Control
                  name='telephone'
                  type="text"
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label="Ville d'origine">
                <Form.Control
                  type="text"
                  value={formData.ville}
                  onChange={handleInputChange}
                  name='ville'
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
              <FloatingLabel label='Comment avez vous connu FAST ?'>
                <Form.Select defaultValue='autre' name='kfast' value={formData.kfast}
                  onChange={handleInputChange}>
                  <option  value="Affiches">Affiches</option>
                  <option value="Amis">Amis</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Autres" >Autres</option>
                </Form.Select>
                </FloatingLabel>
              </Form.Group>
              </>
            )
            }{
              step === 5 &&(
                <>
                <h2 className='text-center'>Veuillez vérifiez les information avant de soumettre</h2>
                  <span dangerouslySetInnerHTML={{__html: message}}>
                  </span>
                  <input type='hidden' name='message' value={message}  />
                </>
              )
            }
            <div className="d-flex justify-content-between">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrevious}>
                  Précedent
                </Button>
              )}
              {step < 5? (
                <Button variant="primary" onClick={handleNext}>
                  Suivant
                </Button>
              ) : (
                <><Button variant="primary" onClick={handleSubmit}>
                Envoyez
              </Button></>
              )}
            </div>
        </Form>        
          </div>

          <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3 className='text-center'>Demande d'ouverture de dossier</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='lead text-center'>Mr/Mme <b>{formData.user_name}</b>  Nous avons bien récu votre demannde, vous serez contacté dans les 48H suivant pour la suite de procédure.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <a href='#/home'>Fermer</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </>
    );
};
export default Openfolder;