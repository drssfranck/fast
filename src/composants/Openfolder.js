
import React, { useRef, useState } from 'react';
import { Form, Button, ProgressBar,FloatingLabel } from 'react-bootstrap';
import './openfolder.css';
import emailjs from '@emailjs/browser';




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
            alert("Envoyé avec succes");
          },
          (error)=>{
            alert('Erreur ..... '+ error.text );
          }
        )
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

 

    return (
      <>
      <p className='lead text-center'>
          <h1>Remplissez notre formulaire d'ouverture de dossier et laissez nos experts vous accompagner</h1>
          <p>
          <ol class="list-group list-group-light list-group-numbered">
              <li class="list-group-item"><b>Conseils personnalisés: </b>pour choisir la destination et le visa adaptés à vos besoins.</li>
              <li class="list-group-item"><b>Accompagnement complet:</b> pour la constitution de votre dossier de demande de visa.</li>
              <li class="list-group-item"><b>Suivi rigoureux: </b>de votre dossier jusqu'à l'obtention du visa.</li>
          </ol>
          </p>
      </p>

<div className='formulaire'>
        
        <Form ref={form} onSubmit={handleSubmit} className='ouvrir-dossier'>
          
      <ProgressBar now={(step / 5) * 100} />
      {step === 1 && (<>
        <Form.Group controlId="formStep1">
          <FloatingLabel controlId="floatingInput" label='Nom et prenom' >
          <Form.Control
            type="text"
            name="user_name"
            value={formData.name}
            onChange={handleInputChange}
          />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formStep11">
        <FloatingLabel label='Date de naissance' className='open-label'>
        <Form.Control
          type="date"
          name="dnaissance"
          value={formData.dnaissance}
          onChange={handleInputChange}
        />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formStep1">
          <FloatingLabel label='Lieu de naissance' className='open-label'>
          <Form.Control
            type="text"
            name="lnaissance"
            value={formData.lnaissance}
            onChange={handleInputChange}
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
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
          />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formStep2">
          <FloatingLabel label="Niveau d'étude">
          <Form.Control
            type="text"
            name="letude"
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
          <Form.Label>Pays choisi</Form.Label>
          <Form.Select name='destination' value={formData.destination}
            onChange={handleInputChange}>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Roumanie">Roumanie</option>
            <option value="Russie">Russie</option>
            <option value="Australie">Australie</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formStep2">
          <Form.Label>Motif du voyage</Form.Label>
          <Form.Select name='motif' value={formData.motif}
            onChange={handleInputChange}>
            <option value="Etude">Etude</option>
            <option value="Tourisme">Tourisme</option>
            <option value="Travail">Travail</option>
            <option value="Residence permanente">Residence permanente</option>
          </Form.Select>
        </Form.Group>
        </>
      )}{step === 4 && (
        <>
          <Form.Group controlId="formStep2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formStep2">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formStep2">
          <Form.Label>Ville d'origine</Form.Label>
          <Form.Control
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formStep2">
          <Form.Label>Comment avez vous connu FAST ?</Form.Label>
          <Form.Select name='kfast' value={formData.kfast}
            onChange={handleInputChange}>
            <option value="1">Affiches</option>
            <option value="2">Amis</option>
            <option value="3">Facebook</option>
            <option value="4">Autres</option>
          </Form.Select>
        </Form.Group>
        </>
      )
      }{
        step === 5 &&(
          <>
          <h2 className='text-center'>Veuillez vérifiez les information avant de soumettre</h2>
            <span>
              <table>
                <tr>
                  <th>Nom et prenom : </th>
                  <td>{formData.name}</td>
                </tr>
                <tr>
                  <th>Date et lieu de naissance :</th>
                  <td>{formData.dnaissance} à {formData.lnaissance}</td>
                </tr>
                <tr>
                  <th>Profession :</th>
                  <td>{formData.profession}</td>
                </tr>
                <tr>
                  <th>Niveau d'étude :</th>
                  <td>{formData.letude}</td>
                </tr>
                <tr>
                  <th>Type de procédure et Destination</th>
                  <td>{formData.motif},{formData.destination}</td>
                </tr>
                <tr>
                  <th>Email :</th>
                  <td>{formData.email}</td>
                </tr>
                <tr>
                  <th>téléphone</th>
                  <td>{formData.telephone}</td>
                </tr>
                <tr>
                  <th>Ville de residence</th>
                  <td>{formData.ville},{formData.destination}</td>
                </tr>
              </table>
              
            </span>
          </>
        )
      }
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 5? (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
      </div>
      </>
    );
};

export default Openfolder;