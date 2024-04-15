import React, { useState } from 'react';
import { FaCalendar, FaGlobe, FaPlane, FaPrint, FaUser } from 'react-icons/fa';
import './fly.css';
import { FaTicket } from 'react-icons/fa6';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';





function Fly(){
    const [formData, setFormData] = useState({});


const printTicket = () =>{
    let ticket = document.getElementById('ticket');
    ticket.style.display ='block';
    console.log('Bonjour zero'+ formData.nom);
}

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

    return(
    <>
        <div className="container-fly">
                <h1 className='h1-fly'><FaPlane className="fa fa-plane icon"/>Demandez une reservation de votre billet d'avion</h1>
                <Form className='form-fly' id="bookingForm" onSubmit={printTicket}>
                <h2 class="fly-infovol">Information sur le vol :</h2>
                <div className='row'> 
                    <Col className='' sm={6}>
                        <Form.Select size='sm' name='depart' onChange={handleInputChange} >
                             <option>Ville de depart</option>
                            <option value='Douala'>Douala</option>
                            <option value='Yaoundé'>Yaounde</option>
                        </Form.Select>
                       
                    </Col>
                    <Col className='' sm={6}>
                        <Form.Select size='sm' name='depart'  >
                             <option>Ville d'arrivée</option>
                            <option value='Douala'>Douala</option>
                            <option value='Yaoundé'>Yaounde</option>
                        </Form.Select>
                    </Col>
                    <Col className='' sm={6}>
                        <FloatingLabel className='label-fly' label='date de depart' for="name" >
                            <Form.Control type='date' placeholder='' value={formData.ddate} id="name" required />
                        </FloatingLabel>
                    </Col>
                    <Col className='' sm={6}>
                        <FloatingLabel className='label-fly' label='date de retour' for="name" >
                            <Form.Control type='date' placeholder='' value={formData.ddate} id="name" required />
                        </FloatingLabel>
                    </Col>
                    <Col className='' sm={4}>
                    <FloatingLabel className='label-fly' label='Nombre d adulte' for="name" >
                        <Form.Control type='number' placeholder='' value={formData.nadulte} id="name" required />
                    </FloatingLabel>
                    </Col>
                    <Col className='' sm={4}>
                    <FloatingLabel className='label-fly' label='Nombre d adolescent' for="name" >
                        <Form.Control type='number' placeholder='' value={formData.nadulte} id="name" required />
                    </FloatingLabel>
                    </Col>
                    <Col className='' sm={4}>
                    <FloatingLabel className='label-fly' label='Nombre d enfant' for="name" >
                        <Form.Control type='number' placeholder='' value={formData.nadulte} id="name" required />
                    </FloatingLabel>
                    </Col>
                    
                    <h2 class="fly-infovol">Information personnel:</h2><br/>

                    <div className='row'>
                    <Col className='' sm={6}>
                    <FloatingLabel className='label-fly' label='nom complet' for="name" >
                        <Form.Control type='text' placeholder='' value={formData.name} id="name" required />
                    </FloatingLabel>
                    </Col>
                    
                    <Col className='' sm='6'>
                    <FloatingLabel className='label-fly' label='Téléphone' for="name" >
                        <Form.Control type='tel' placeholder='' value={formData.name} id="name" required />
                    </FloatingLabel>
                    </Col>
                    <Col className='' sm='12'>
                    <FloatingLabel className='label-fly' label='Adresse email' for="name" >
                        <Form.Control type='email' placeholder='' value={formData.name} id="name" required />
                    </FloatingLabel>
                    </Col>
                    <Col className='' sm='12'>
                        <Button variant="primary">Envoyez</Button>{' '}
                    </Col>

                <div className="ticket" id="ticket" >
                    <h2><FaTicket className="fa fa-ticket icon"/>Information sur la Reservation</h2>
                    <p><FaUser className="fa fa-user icon"/><strong>Nom:</strong> {formData.nom}<span id="ticketName"></span></p>
                    <p><FaGlobe className="fa fa-globe icon"/><strong>Ville de depart:</strong> {formData.depart}<span id="ticketDestination"></span></p>
                    <p><FaCalendar className="fa fa-calendar icon"/><strong>Date de depart</strong> {formData.depart}<span id="ticketDate"></span></p>
                    <button className='button-fly' onclick="printTicket()"><FaPrint className="fa fa-print icon"/>Print Ticket</button>
                </div>
                </div>
                </div>
                </Form>

        </div>
    </>
)
}
export default Fly;