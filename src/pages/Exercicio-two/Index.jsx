import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio2() {
  
  const [valorkilo, setValorkilo] = useState(0)
  const [resultado, setResultado] = useState(0)

  function valor(e){
    const valor_grama = Number(e.target.value)
    setValorkilo(valor_grama)
  }
  function calcula(e){
    const calculoinicial = valorkilo * 1000
    setResultado(calculoinicial)
  }

  return (
    <div className="pagina-Exercicio2">
      <Head/>
      <div className="body-exercicio-two">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 02 - Converter Kg/gramas</h2>
        </div>
        
        <hr className='line2' />
        
        <p className='text-question'>Implementar um programa em Javascript para converter kilos em gramas.</p>
        
         <div className="card-result1">
          <p>Valor em gramas</p>
          <input onChange={valor} type="text" placeholder='   0'/>
          <button onClick={calcula}>Executar</button>
        </div>

        <p id='result'>Resultado: O total é {resultado} gramas</p>
      
      </div>

    </div>
    
  );
}


