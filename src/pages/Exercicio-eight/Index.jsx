import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio8() {
  
  const [temperatura, setTemperatura] = useState(0)
  const [resultado, setResultado] = useState("____")

  function Temperatura(e){
    const temperatura = Number(e.target.value)
    setTemperatura(temperatura)
  }
  function calcula_temperatura(e){
    if(temperatura < 36 ){
      setResultado("Hipotermia")
    }
    else if(temperatura >= 36 && temperatura < 37.6 ){
      setResultado("Normal")
    }
    else if(temperatura >= 37.6 && temperatura <= 39.6 ){
      setResultado("Febre")
    }
    else if(temperatura >= 39.6 && temperatura < 41 ){
      setResultado("Febre Alta")
    }
    else if(temperatura >= 41 ){
      setResultado("Hipertermia")
    }
  }
  const corResultado = resultado === "Febre Alta" || resultado === "Hipertermia" ? "red" : "black";

  return (
    <div className="pagina-Exercicio8">
     <Head/>
      <div className="body-exercicio-two">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 08 - Temperatura</h2>
        </div>
        
        <hr className='line2' />
        
        <p className='text-question'>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.</p>
          <img className='img_table' src="/assets/image/table_temperaturas.png" alt="" /> 
         <div className="card-result1">
          <p>Temperatura</p>
          <input onChange={Temperatura} type="text" placeholder='   0'/>
          <button onClick={calcula_temperatura}>Executar</button>
        </div>

        <p id='result' style={{ color: corResultado }}>A situação para sua temperatura é {resultado}</p>
      
      </div>

    </div>
    
  );
}


