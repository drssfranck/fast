import { Form,FloatingLabel,Button } from "react-bootstrap";

const StepThree = ({prevStep, nextStep, handleChange, values }) =>{

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
                <FloatingLabel label='Email'>
                  <Form.Control
                    name='email'
                    type="text"
                    value={values.email}
                    onChange={handleChange('email')}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label='Numéro de téléphone'>
                <Form.Control
                  name='telephone'
                  type="text"
                  value={values.telephone}
                  onChange={handleChange('telephone')}
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
                <FloatingLabel label="Ville d'origine">
                <Form.Control
                  type="text"
                  value={values.ville}
                  onChange={handleChange('ville')}
                  name='ville'
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="formStep2">
              <FloatingLabel label='Comment avez vous connu FAST ?'>
                <Form.Select defaultValue='autre' name='kfast' value={values.kfast}
                  onChange={handleChange('kfast')}>
                  <option  value="Affiches">Affiches</option>
                  <option value="Amis">Amis</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Autres" >Autres</option>
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
export default StepThree;