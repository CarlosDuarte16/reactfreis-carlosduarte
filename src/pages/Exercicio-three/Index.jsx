import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio3() {
  
  const [qtdaçaipequeno, setQtdaçaipequeno] = useState(0);
  const [qtdaçaimedio, setQtdaçaimedio] = useState(0);
  const [qtdaçaigrande, setQtdaçaigrande] = useState(0);
  const [calculoaçais, setCalculoaçais] = useState(0);
  
  function açai_pequeno(e){
    const açaiP = Number(e.target.value)
    setQtdaçaipequeno(açaiP)
  }
  function açai_medio(e){
    const açaiM = Number(e.target.value)
    setQtdaçaimedio(açaiM)
  }
  function açai_grande(e){
    const açaiG = Number(e.target.value)
    setQtdaçaigrande(açaiG)
  }
  function açai_calculo(){
    const calculoaçaiP = qtdaçaipequeno * 13.50; 
    const calculoaçaiM = qtdaçaimedio * 15.00; 
    const calculoaçaiG = qtdaçaigrande * 17.50;
    const calculoTotalPMG = calculoaçaiP + calculoaçaiM + calculoaçaiG;
    setCalculoaçais(calculoTotalPMG)
  }
 
  return (
    <div className="pagina-Exercicio3">
      <Head/>
      <div className="body-exercicio-three">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 03 - Valor total por quantidade</h2>
        </div>
        
        <hr className='line3' />
        
        <p className='text-question'>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande,<br /> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
        
         <div className="card-result2">
          <div className="inputs">
            <div className="input1">
              <p className='text1'>Quantidade pequeno</p>
              <input onChange={açai_pequeno} className='one' type="text" placeholder='   0'/>
            </div>
            <div className="input1">
              <p className='text2'>Quantidade médio</p>
              <input onChange={açai_medio} className='one' type="text" placeholder='   0'/>
            </div>
            <div className="input1">
            <p className='text3'>Quantidade grande</p>
            <input onChange={açai_grande} className='one' type="text" placeholder='   0'/>
            </div>
          </div>
          <button onClick={açai_calculo}>Executar</button>
        </div>

        <p id='result1'>Resultado: O total é R${calculoaçais.toFixed(2)}</p>
      
      </div>

    </div>
    
  );
}


