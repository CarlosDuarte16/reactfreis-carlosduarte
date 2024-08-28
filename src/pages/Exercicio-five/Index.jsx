import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio5() {
  const [nota01, setNota01] = useState(0)
  const [nota02, setNota02] = useState(0)
  const [nota03, setnota03] = useState(0)
  const [média, setMédia] = useState(0)  
  const [resultado, setResultado] = useState("")

  function Nota01(e){
    let nota_01 = Number(e.target.value);
    setNota01(nota_01)
  }
  function Nota02(e){
    let nota_02 = Number(e.target.value);
    setNota02(nota_02)
  }
    function Nota03(e){
    let nota_03 =Number(e.target.value);
    setnota03(nota_03)
  }
  function calculo_media(){
    let calculomédia = (nota01 + nota02 + nota03)/3
    setMédia(calculomédia);

    resposta_trueORfalse(calculomédia);
  }
  function resposta_trueORfalse(média){
    let resultado = média >= 6 ? "true" : "false";
    setResultado(resultado)
  }

  return (
    <div className="pagina-Exercicio5">
      <Head/>
      <div className="body-exercicio-one">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 05 - Média de notas</h2>
        </div>
        
        <hr className='line' />
        
        <p className='text-question'>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
        
         <div className="card-result4">
          <p>Nota 01</p>
          <input onChange={Nota01} type="text" placeholder='   0'/>
          <p className='text2'>Nota 02</p>
          <input onChange={Nota02} type="Number" placeholder='   0'/>
          <p className='text2'>Nota 03</p>
          <input onChange={Nota03} type="Number" placeholder='   0'/>
          <button onClick={calculo_media} >Executar</button>
        </div>

        <p id='result'>A média do aluno é {média.toFixed(2)} <br /> O aluno passou? {resultado}</p>
      
      </div>

    </div>
    
  );
}


