import { Component } from "react"
import { Stepper } from "react-form-stepper"

class Depart extends Component{
    
    
    continue = e =>{
        e.preventDefault();

        const isVilleValid = this.props.validateVilled()
        const isPaysValid = this.props.validatePaysd();
        if (isPaysValid && isVilleValid) {
            this.props.nextStep();
        }
        
    }


    render(){
        const {Villed, Paysd, dateD,handleChange,VilleMessage,PaysMessage,VilledError,PaysdError,dateDError} = this.props;

        return(
            <div className="form">
                <form>
                    <Stepper
                        steps={[{label:'Information sur le vol'},{label:'Information sur le vol'},{label :'Nombre de passager'},{label :'Information Personnelle'},{label :'Confirmation'}]}
                        activeStep={0}   
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
                            <label htmlFor="ville de depart" className="form-group__label">
                                Ville de depart
                            </label>
                            <input type="text" onBlur={this.onBlur} value={Villed} name="Villed" onChange={handleChange('Villed')}  className='form-group__input' />
                            <p className="error">
                                {VilledError && VilleMessage} 
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="pays de depart" className="form-group__label">
                                Pays
                            </label>
                            <input type="text" onBlur={this.onBlur} value={Paysd} name="Paysd" onChange={handleChange('Paysd')} className='form-group__input' />
                            <p className="error">
                                {PaysdError && PaysMessage}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="date de depart" className="form-group__label">
                                Date de depart
                            </label>
                            <input type="date" onBlur={this.onBlur} value={dateD} name="dateD" onChange={handleChange('dateD')}  className='form-group__input' />
                            <p className="error">
                                {dateDError && 'Veuillez selectionner le jour'}
                            </p>
                        </div>
                    </div>


                    <div style={{textAlign: 'center'}}>
                        <button className='buttons__button buttons__button--next' onClick={this.continue}>Suivant</button>
                    </div>

                </form>
            </div>
        )

    }
}
export default Depart