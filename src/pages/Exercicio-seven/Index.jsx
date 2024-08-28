import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';
export default function Exercicio7() {
  const [corOne, setCorOne] = useState("")
  const [corTwo, setVCorTwo] = useState("")
  const [resultado, setResultado] = useState("")

  function primeira_cor(e){
    let cor1 = e.target.value;
    setCorOne(cor1)
  }
  function segunda_cor(e){
    let cor2 = e.target.value;
    setVCorTwo(cor2)
  }
  function button_executar(e){
    let trueORfalse = corOne == "azul" && corTwo == "azul" || corOne == "azul" && corTwo == "vermelho" || corOne == "azul" && corTwo == "amarelo" || corOne == "vermelho" && corTwo == "vermelho" || corOne == "vermelho" && corTwo == "amarelo" || corOne == "vermelho" && corTwo == "azul" || corOne == "amarelo" && corTwo == "amarelo" || corOne == "amarelo" && corTwo == "vermerlho" || corOne == "amarelo" && corTwo == "azul" ? "true" : "false";
    setResultado(trueORfalse);
    
  }
  

  return (
    <div className="pagina-Exercicio7">
      <Head/>
      <div className="body-exercicio-one">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 07 - Cores primárias</h2>
        </div>
        
        <hr className='line' />
        
        <p className='text-question'>Implementar um programa em javascript para verificar se duas cores são primárias</p>
        
         <div className="card-result">
          <p>Cor 1</p>
          <input onChange={primeira_cor} type="text" placeholder='   Digite a primeira cor'/>
          <p className='text2'>Cor 2</p>
          <input onChange={segunda_cor} type="text" placeholder='   Digite a segunda cor'/>
          <button onClick={button_executar}>Executar</button>
        </div>

        <p id='result'>As duas cores são primárias? {resultado}</p>
      
      </div>

    </div>
    
  );
}


