import { Component } from "react"
import { Stepper } from "react-form-stepper"

class Destination extends Component{
    

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }


      onBlur = e =>{
        console.log(e.target.value)
      }
    render(){
        const { Villea,paysa, dateR,handleChange} = this.props;

        return(
            <div className="form">
                <form>
                    <Stepper
                        steps={[{label:'Information sur le vol'},{label:'Information sur le vol'},{label :'Nombre de passager'},{label :'Information Personnelle'},{label :'Confirmation'}]}
                        activeStep={1}   
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
                            <label htmlFor="ville de destination" className="form-group__label">
                                Destination(Ville)
                            </label>
                            <input type="text" onBlur={this.onBlur} value={Villea} name="ville de destination" onChange={handleChange('Villea')}  className='form-group__input' />
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="pays destination" className="form-group__label">
                                Destination(Pays)
                            </label>
                            <input type="text" value={paysa} name="pays destination" onChange={handleChange('paysa')}  className='form-group__input' />
                            <p className="error">
                                {}
                            </p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group__element">
                            <label htmlFor="date de retour" className="form-group__label">
                                Date de retour
                            </label>
                            <input type="date" value={dateR} name="ville de rretour" onChange={handleChange('dateR')}  className='form-group__input' />
                            <p className="error">
                                {'Date de retour'}
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
export default Destination