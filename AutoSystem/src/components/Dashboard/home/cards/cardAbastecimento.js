import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';

import abastecimento from '../../img/abastecimento.png'
import { Link } from 'react-router-dom';

const CardAbastecimento = () => {
  return <div className='card1'>
    <img src={abastecimento} alt="Descrição da imagem" width={85} />
    <h5 className='tcard'>Abastecimento</h5>
    <p className='pcard'>
    Controle eficiente de combustível. Registre abastecimentos, acompanhe gastos e ajuste dados para melhor gestão.
    </p>
    <Link to="/abastecimentos">
      <button className='button-primary'>Acessar Abastecimento</button>
    </Link>
    
  </div>  
}


  export default CardAbastecimento

 