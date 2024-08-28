import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio9() {
  
  const [valorgramas, setGramas] = useState(0)
  const [resultado, setResultado] = useState(0)

  function valor(e){
    const valor_gramas = Number(e.target.value)
    setGramas(valor_gramas)
  }
  function calcula(e){
    let precoPor100g = 3.50;
    if(valorgramas >= 1000){
      precoPor100g -= 0.50
    }
    let calculo = (valorgramas/100) * precoPor100g
    setResultado(calculo)
  }

  return (
    <div className="pagina-Exercicio9">
     <Head/>
      <div className="body-exercicio-two">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 09 - Sorveteria</h2>
        </div>
        
        <hr className='line2' />
        
        <p className='text-question'>Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 <br /> mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.</p>
        
         <div className="card-result1">
          <p>Total de gramas</p>
          <input onChange={valor} type="text" placeholder='   0'/>
          <button onClick={calcula}>Executar</button>
        </div>

        <p id='result'> O total a é R${resultado.toFixed(2)}</p>
      
      </div>

    </div>
    
  );
}


