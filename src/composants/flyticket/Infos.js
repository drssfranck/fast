import { Component } from "react"
import { Stepper } from "react-form-stepper"

class Infos extends Component{
    

    continue = e =>{

        e.preventDefault();
        const isNomValid = this.props.validateNom()
        const isTelephoneValid = this.props.validateTelephone();


        if (isNomValid && isTelephoneValid) {
            this.props.nextStep();
        }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

    render(){
        const {nom, telephone, EMail,  preference,handleChange,nomError,
            nomMessage,
            telephoneErro,
            telephoneMessage}  = this.props;

        return(
            <div className="form">
                <form>
                    <Stepper
                        steps={[{label:'Information sur le vol'},{label:'Information sur le vol'},{label :'Nombre de passager'},{label :'Information Personnelle'},{label :'Confirmation'}]}
                        activeStep={3}
                        styleConfig={{
                            activeBgColor: '#003487',
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

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="Nom complet" className="form-group__label">
                                Nom complet
                            </label>
                            <input type="text" value={nom} name="Nom complet" onChange={handleChange('nom')}   className='form-group__input' />
                            <p className="error">
                                {nomError && nomMessage}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor=" Numéro de télephone" className="form-group__label">
                                Numéro de télephone
                            </label>
                            <input type="tel" value={telephone} name="Numéro de télephone"  onChange={handleChange('telephone')}  className='form-group__input' />
                            <p className="error">
                                {telephoneErro && telephoneMessage}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="Adresse Email" className="form-group__label">
                                Adresse Email
                            </label>
                            <input type="email" value={EMail} name="Adresse Email" required onChange={handleChange('EMail')}  className='form-group__input' />
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="Agence solicité" className="form-group__label">
                                Agence solicité
                            </label>
                            <select value={preference} name="Agence solicité" onChange={handleChange('preference')}  className='form-group__input'>
                                <option value='Camair-co'>Camair-Co</option>
                                <option value='Ethiopian'>Ethiopian</option>
                                <option value='Air-France'>Air-France</option>
                                <option value='Asky'>Asky</option>
                            </select>
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='buttons__button buttons__button--back' onClick={this.back}>Precedent</button>
                        <button className='buttons__button buttons__button--next' onClick={this.continue}>Suivant</button>
                    </div>
                </form>
            </div>
        )

    }
}
export default Infos