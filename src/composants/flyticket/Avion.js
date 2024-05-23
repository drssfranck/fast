import React, { Component } from 'react';
import Flyticket from './Flyticket';
import { FaPlane } from 'react-icons/fa';

class Avion extends Component {

  render() {

    return (
      <main className='main-container'>
        
             <h1 className='h1-fly'>
                <FaPlane className="fa fa-plane icon"/>Demandez une reservation de votre billet d'avion
             </h1>
  
         <Flyticket/>
      </main>
    );
  }
}

export default Avion;
