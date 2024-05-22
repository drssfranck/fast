import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import './open.css';
import React, { useState } from "react";

const StepOne = ({nextStep, handleChange, values}) =>{
    const [errorName, setErrorName] = useState(false);
    const [errorDnais, setErrorDnais] = useState(false);

    const [errorLnais, setErrorLnais] = useState(false);


    const Continue = e => {
        e.preventDefault();
        const tdate = new Date('2010-01-01');
        let dn = new Date(values.dnais);
        if (values.nom ==='') {
            setErrorName(true);
            return;
        } 
         if (dn.getFullYear() > tdate.getFullYear()) {
            setErrorDnais(true);
            return;
        } 
         if (values.lnais ==='') {
            setErrorLnais(true)
            return;
        } 
            nextStep();
        
            

        
      }
   

    return(
        <Container className='opendossier'>
                <Form>
                    <Form.Group className="mb-3" controlId="formStep1">
                            <FloatingLabel controlId="floatingInput" label='Nom et prenom' id="inputGroupPrepend" >
                            <input
                                className='form-control'
                                type="text"
                                name="nom"
                                aria-describedby="inputGroupPrepend"
                                defaultValue={values.nom}
                                onChange={handleChange("nom")}


                            />
                            {
                                errorName ? (
                                    <p className='errorMessage'>
                                        Veuillez entrer votre nom
                                    </p>
                                ) : (
                                    ""
                                )
                            }
                            </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="formStep11">
                        <FloatingLabel label='Date de naissance' className='open-label'>
                            <Form.Control
                            type="date"
                            name='dnais'
                            value={values.dnais}
                            onChange={handleChange("dnais")}

                            />
                        </FloatingLabel>
                            {
                                errorDnais ? (
                                    <Form.Text className='errorMessage'>
                                        This is a required field
                                    </Form.Text>
                                ) : (
                                    ""
                                )
                            }
                    </Form.Group>
                    <Form.Group controlId="formStep1">
                        <FloatingLabel label='Lieu de naissance' className='open-label'>
                        <Form.Control
                        name='lnais'
                        type="text"
                        value={values.lnais}
                        onChange={handleChange("lnais")}

                        />
                        {errorLnais ? (
                                <p className='errorMessage'>
                                    *Date de naisance Obligatoire
                                </p>
                            ) : (
                                ""
                            )}
                        </FloatingLabel>
                            
                    </Form.Group>
                    <Button type='submit' className='btn-left' onClick={Continue}>Suivant</Button>
                </Form>
        </Container>
    )
}
export default StepOne;