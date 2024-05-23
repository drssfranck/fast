import React,{Component} from "react";
import Destination from "./Destination";
import Nbre from "./Nbre";
import Infos from "./Infos";
import Confirmation from "./Confirmation";
import './flyticket.css';
import Depart from "./Depart";

class Flyticket extends Component{
    state = {
        step : 0,
        Villed :'',
        VilledError:true,
        VilleMessage:'',
        Paysd :'',
        PaysdError:true,
        PaysMessage:'',
        Villea:'',
        paysa:'',
        allerRetour:false,
        dateD:'',
        dateDMessage:'',
        dateDError:true,
        dateR:'',
        nbrea:0,
        nbreado:0,
        nbreenf:0,
        nom:'',
        nomError:true,
        nomMessage:'',
        telephone:'',
        telephoneErro:true,
        telephoneMessage:'',
        EMail:'',
        preference:''
    }

    handleSubmit = () =>{

    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1})
      }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({step :step+1})
    }

    handleChange = input => e =>{
        this.setState({[input]:e.target.value});

        switch (input) {
            case 'Villed':
                    if (this.state.Villed.length>= 3) {
                        this.setState({VilledError:false})
                    }
                break;
            case 'Paysd':
                    if (this.state.Paysd.length>= 3) {
                        this.setState({PaysdError:false})
                    }
                break;    
            case 'dateD':
                    if (this.state.dateD.length >=3) {
                        this.setState({dateDError:false})
                        
                    }
                break;
            case 'nom':
                    if (this.state.nom.length >=3) {
                        this.setState({nomError:false})
                        
                    }
                break;  
            case 'telephone':
                    if (this.state.telephone.length >=9) {
                        this.setState({telephoneErro:false})
                        
                    }
                break;           
            default:
                break;
        }
    }

    validateVilled = () => {
        if (this.state.Villed.length < 2) {
          this.setState({
            VilledError: true,
            VilleMessage: 'Entrez un nom valide'
          });
          return false;
        }
        return true;
      }
      validatePaysd = () => {
        if (this.state.Paysd.length < 2) {
          this.setState({
            PaysdError: true,
            PaysMessage: 'Entrez un nom valide'
          });
          return false;
        }
        return true;
      }

      validateNom = () => {
        if (this.state.nom.length < 3) {
          this.setState({
            nomError: true,
            nomMessage: 'Entrez un nom valide'
          });
          return false;
        }
        return true;
      }

      validateTelephone = () => {
        if (this.state.telephone.length < 9) {
          this.setState({
            telephoneErro: true,
            telephoneMessage: 'Entrez un numéro valide'
          });
          return false;
        }
        return true;
      }
    

    render(){
            const {
                step,Villed, Paysd, Villea,paysa, dateD, dateR,nbrea,nbreado,nbreenf,nom,PaysdError, telephone, EMail,VilledError, dateDError, preference,VilleMessage,PaysMessage
                ,nomError,
                nomMessage,
                telephoneErro,
                telephoneMessage,
            } = this.state;
            

            switch (step) {
                case 0:
                    return(
                        <Depart validatePaysd={this.validatePaysd} validateVilled={this.validateVilled} nextStep={this.nextStep} dateDError={dateDError}  handleChange={this.handleChange} PaysdError={PaysdError} VilledError={VilledError} PaysMessage={PaysMessage} Villed = {Villed} Paysd ={Paysd} dateD ={dateD} VilleMessage={VilleMessage}  />
                    )
                    break;
                case 1:
                    return(
                        <Destination nextStep={this.nextStep} prevStep={this.prevStep}   handleChange={this.handleChange}  Villea ={Villea} paysa ={paysa}  dateR = {dateR} />
                    )
                    break;
                
                case 2 :
                    return(
                        <Nbre nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} nbrea= {nbrea} nbreado = {nbreado} nbreenf= {nbreenf} />
                    )
                    break;
              
                case 3 :
                    return(
                        <Infos validateNom={this.validateNom} validateTelephone={this.validateTelephone} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} nom ={nom} telephone ={telephone} EMail ={EMail} preference ={preference} 
                        nomError= {nomError}
                        nomMessage={nomMessage}
                        telephoneErro = {telephoneErro}
                        telephoneMessage={telephoneMessage} />
                    )
                    break;
                case 4 :
                    return(
                        <Confirmation  nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} Villed = {Villed} Paysd ={Paysd} Villea ={Villea} paysa ={paysa} dateD ={dateD} dateR = {dateR} nbrea= {nbrea} nbreado = {nbreado} nbreenf= {nbreenf} nom ={nom} telephone ={telephone} EMail ={EMail} preference ={preference}/>
                    )
                    break;
                default:return(
                    null
                )
                
            }

        
    }
}

export default Flyticket;