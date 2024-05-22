import { ListGroup,Button, Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'



const Final = ({prevStep, nextStep, values }) =>{
    const {nom,dnais,lnais,profession,letude,email,telephone,ville,kfast,destination,motif} = values;
    const Continue = e => {
        e.preventDefault();

        emailjs.send(
                "service_x2cl3to",
                "template_b1leszw",{
                nom: values.nom,
                dnais: values.dnais,
                lnaiss: values.lnais,
                profession: values.profession,
                letude: values.letude,
                email: values.email,
                telephone: values.telephone,
                ville: values.ville,
                kfast: values.kfast,
                destination: values.destination,
                motif: values.motif,
                reply_to: values.email,
                },{
                    publicKey:'VplvNKZRTHRS3JBCj'
                  }
        ).then(
            ()=>{
                    Swal.fire({
                        text:"Votre demande a bien été envoyé",
                        icon:'success'
                    });
              },
              (error)=>{
                    Swal.fire({
                        text:"Veuillez reessayer",
                        icon:'error'
                    });
              }
        )



        
        
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }
    return(
        <Container className="opendossier">
             <ListGroup as="ul">
                <ListGroup.Item as="li">
                   <b> Nom et Prenom :</b> {nom}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b>Date et Lieu de naissance : </b>{dnais} à {lnais}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b>Profession : </b>{profession}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Niveau d'étude : </b>{letude}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Email : </b>{email}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Télephone : </b>{telephone}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b>  ville : </b>{ville}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Comment avez vous connu FAST ? : </b>{kfast}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Destination : </b>{destination}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                <b> Motif : </b>{motif}
                </ListGroup.Item>
            </ListGroup>
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
                Soumettre
              </Button>
        </Container>
    )
}
export default Final;