import { Form, FloatingLabel, Button } from 'react-bootstrap';
import React, { useState } from "react";


const StepTwo = ({prevStep, nextStep, handleChange, values }) =>{
  const [errorProfession, setErrorProfession] = useState(false);
  const [errorLetude, setErrorLetude] = useState(false);



    const Continue = e => {
        e.preventDefault();

        if (values.profession ==='') {
          setErrorProfession(true);
          return;
      } 
      if (values.letude ==='') {
        setErrorLetude(true);
        return;
    } 
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }

    return(
        <Form>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Profession'>
                <Form.Control
                  type="text"
                  value={values.profession}
                  onChange={handleChange('profession')}
                  name='profession'
                />
                              {
                                errorProfession ? (
                                    <p className='errorMessage'>
                                        *Veuillez entrer votre profession
                                    </p>
                                ) : (
                                    ""
                                )
                            }
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label="Niveau d'étude">
                <Form.Control
                   name='letude'
                  type="text"
                  value={values.letude}
                  onChange={handleChange('letude')}
                />
                             {
                                errorLetude ? (
                                    <p className='errorMessage'>
                                        *Veuillez entrer votre niveau d'étude
                                    </p>
                                ) : (
                                    ""
                                )
                            }
                </FloatingLabel>
              </Form.Group>
              <Button 
                onClick={ Previous }
                type="submit"
                className='btn-left'
              >
                Precedent
              </Button>

              <Button 
                onClick={ Continue }
                type="submit"
                className="btn-right"
              >
                Suivant
              </Button>
                
              </Form>
            
    )
}
export default StepTwo;