import { Component } from "react"
import { Stepper } from "react-form-stepper"
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';


class Confirmation extends Component{
    

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      }
    render(){
        const {Villed, Paysd, Villea,paysa, dateD, dateR,nbrea,nbreado,nom, telephone, EMail,  preference,nbreenf} = this.props;

       const  submitData = e => {
            e.preventDefault();
    
            emailjs.send(
                    "service_x2cl3to",
                    "template_xnw0r8k",{
                        nom: nom,
                        Villed: Villed,
                        Paysd: Paysd,
                        dateD: dateD,
                        Villea:Villea,
                        paysa:paysa,
                        EMail: EMail,
                        telephone: telephone,
                        nbrea: nbrea,
                        nbreado: nbreado,
                        nbreenf: nbreenf,
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
        return(
            <div className="form">
                    <Stepper
                        steps={[{label:'Information sur le vol'},{label:'Information sur le vol'},{label :'Nombre de passager'},{label :'Information Personnelle'},{label :'Confirmation'}]}
                        activeStep={4}

                        styleConfig={{
                            activeBgColor: '#2b7cff',
                            activeTextColor: '#fff',
                            inactiveBgColor: '#fff',
                            inactiveTextColor: '#2b7cff',
                            completedBgColor: '#fff',
                            completedTextColor: '#2b7cff',
                            size: '3em'
                          }}
                          className={'stepper'}
                          stepClassName={'stepper__step'}
                    />
                    <div className="summary">
                        <h2 className="summary-heading">
                            Confirmer vos Informations Personnelle
                        </h2>
                        <div>
                            <div>
                                <p><span className='summary__item-title'>Nom et Prenom</span> {nom}</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Email:</span> { EMail }</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>télephone:</span> { telephone }</p>
                            </div>
                        </div>
                    </div>


                    <div className="summary">
                        <h2 className="summary-heading">
                            Information sur le vol
                        </h2>
                        <div>
                            <div>
                                <p><span className='summary__item-title'>Ville et pays de depart</span> {Villed}  {Paysd}</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Date de depart</span> { dateD }</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Destination</span> { Villea }/{paysa} </p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Date de retour</span> { dateR }</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Nombre de passager</span> { nbrea } Adulte(s), { nbreado } adolescent(s)</p>
                            </div>
                            <div>
                                <p><span className='summary__item-title'>Compagnies de préférence</span> { preference } </p>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
                        <button className='buttons__button buttons__button--next' type='submit' onClick={submitData}>Submit</button>
                    </div>
            </div>
        )

    }
}
export default Confirmation