import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio11() {
  
  const [numeromultiplicador, setNumeromultiplicador] = useState(0)
  const [resultado, setResultado] = useState(0)

  function multiplicador(e){
    const Multiplicador = Number(e.target.value)
    setNumeromultiplicador(Multiplicador)
  }
  function calcula(e){
    const vetor = []
    for(let i = 0; i < 11; i++){
      vetor.push(numeromultiplicador * i)
    }
    setResultado(vetor)
  }

  return (
    <div className="pagina-Exercicio11">
      <Head/>
      <div className="body-exercicio-two">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 11 - Tabuada</h2>
        </div>
        
        <hr className='line2' />
        
        <p className='text-question'>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
        
         <div className="card-result1">
          <p>Tabuada do:</p>
          <input onChange={multiplicador} type="text" placeholder='   0'/>
          <button onClick={calcula}>Executar</button>
        </div>

        <p id='result'> {numeromultiplicador} x 0 = {resultado[0]} <br /> {numeromultiplicador} x 1 = {resultado[1]} <br /> {numeromultiplicador} x 2 = {resultado[2]} <br /> {numeromultiplicador} x 3 = {resultado[3]} <br /> {numeromultiplicador} x 4 = {resultado[4]} <br /> {numeromultiplicador} x 5 = {resultado[5]} <br /> {numeromultiplicador} x 6 = {resultado[6]} <br /> {numeromultiplicador} x 7 = {resultado[7]} <br /> {numeromultiplicador} x 8 = {resultado[8]} <br /> {numeromultiplicador} x 9 = {resultado[9]} <br /> {numeromultiplicador} x 10 = {resultado[10]} </p> 
      </div>

    </div>
    
  );
};