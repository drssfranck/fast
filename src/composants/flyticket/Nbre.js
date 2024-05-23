import { Component } from "react"
import { Stepper } from "react-form-stepper"

class Nbre extends Component{
    

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }
    render(){
        const {nbrea,nbreado,nbreenf,handleChange} = this.props;

        return(
            <div className="form">
                <form>
                    <Stepper
                        steps={[{label:'Information sur le vol'},{label:'Information sur le vol'},{label :'Nombre de passager'},{label :'Information Personnelle'},{label :'Confirmation'}]}
                        activeStep={2}
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
                            <label htmlFor="Nombre d'adulter" className="form-group__label">
                                Nombre d'adulter
                            </label>
                            <input type="number" value={nbrea} name="Nombre d'adulter" onChange={handleChange('nbrea')}  className='form-group__input' />
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor=" Nombre d'adolescent" className="form-group__label">
                                Nombre d'adolescent
                            </label>
                            <input type="number" value={nbreado} name=" Nombre d'adolescent" onChange={handleChange('nbreado')}  className='form-group__input' />
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor=" Nombre d'adolescent" className="form-group__label">
                                Nombre d'enfant
                            </label>
                            <input type="number" value={nbreenf} name=" Nombre d'adolescent" onChange={handleChange('nbreenf')}  className='form-group__input' />
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
export default Nbre