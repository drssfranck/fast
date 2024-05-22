import React,{useState} from "react";

import { ProgressBar, Button } from "react-bootstrap";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./SteThree";
import StepFour from "./StepFour";
import Final from "./Final";
import './open.css';

const  titlee = ['Information Personnel','Niveau d\'étude et profession', 'Procédure choisie','Adresses','Validation' ]

class  Open extends React.Component {
        
            state = {
                step : 0,
                nom :'',
                dnais :'',
                lnais:'',
                profession:'',
                letude:'',
                email:'',
                telephone:'',
                ville:'',
                kfast:'',
                destination:'',
                motif:''
            }

            prevStep =() =>{
                const {step} = this.state;
                this.setState({step :step-1})
            }

            nextStep = () =>{
                const {step} = this.state;
                this.setState({step :step+1})
            }

            handleChange = input => e =>{
                this.setState({[input]:e.target.value});
            }
        render(){

            const {step} = this.state;
            const {nom,dnais,lnais,profession,letude,email,telephone,ville,kfast,destination,motif} = this.state;
            const values = {nom,dnais,lnais,profession,letude,email,telephone,ville,kfast,destination,motif} ;



            return(
                <div className="container "> 
                    <h3 className='text-center'>Remplissez notre formulaire d'ouverture de dossier et laissez nos experts vous accompagner</h3>
                    <ProgressBar now={((step+1) / 5) * 100} />
                    <h2 className='text-center'>{titlee[step]}</h2>
    
    
                    {
                        step === 0 && (
                            <>
                                <StepOne nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                            </>
                        )
                    }
    
                    {   
                        step === 1 && (
                            <>
                                <StepTwo prevStep={ this.prevStep } nextStep={ this.nextStep }  handleChange={ this.handleChange }  values={ values }/>
                            </>
                        )
                    }
    
                    {   
                        step === 2 && (
                            <>
                                <StepThree prevStep={ this.prevStep } nextStep={ this.nextStep }  handleChange={ this.handleChange }  values={ values }/>
                            </>
                        )
                    }
                    {   
                        step === 3 && (
                            <>
                                <StepFour prevStep={ this.prevStep } nextStep={ this.nextStep }  handleChange={ this.handleChange }  values={ values }/>
                            </>
                        )
                    }
                    {   
                        step === 4 && (
                            <>
                                <Final prevStep={ this.prevStep } nextStep={ this.nextStep }  handleChange={ this.handleChange }  values={ values }/>
                            </>
                        )
                    }
                    
                </div>
            )
        }
      
}

export default Open;