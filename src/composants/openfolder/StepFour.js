import { Button, Form,FloatingLabel } from "react-bootstrap";


const StepFour = ({prevStep, nextStep, handleChange, values }) =>{

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }
    return(
        <Form>
           
           
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Pays choisi'>
                <Form.Select  name='destination'  value={values.destination} onChange={handleChange('destination')}>
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
                <Form.Select name='motif' value={values.motif} onChange={handleChange('motif')}>
                  <option value="Etude" >Etude</option>
                  <option value="Tourisme">Tourisme</option>
                  <option value="Travail">Travail</option>
                  <option value="Residence permanente">Residence permanente</option>
                </Form.Select>
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
export default StepFour;