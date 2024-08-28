import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';
export default function Exercicio6() {
  const [saláriobase, setSaláriobase] = useState(0)
  const [bonus, setBonus] = useState(0)
  const [descontos, setDescontos] = useState(0)  
  const [resultado, setResultado] = useState(0)

  function Salário_base(e){
    let saláriobase = Number(e.target.value);
    setSaláriobase(saláriobase)
  }
  function Bonus(e){
    let bonus = Number(e.target.value);
    setBonus(bonus)
  }
    function Descontos(e){
    let descontos =Number(e.target.value);
    setDescontos(descontos)
  }

  function resposta(){
    let porcentagem_bonus = bonus/100 * saláriobase
    let soma = porcentagem_bonus + saláriobase
    let subtração = soma - descontos
    setResultado(subtração)
  }

  return (
    <div className="pagina-Exercicio6">
     <Head/>
      <div className="body-exercicio-one">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 06 - Salário líquido</h2>
        </div>
        
        <hr className='line' />
        
        <p className='text-question'>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de <br /> descontos em reais</p>
        
         <div className="card-result4">
          <p>Salário base</p>
          <input onChange={Salário_base} type="text" placeholder='   0'/>
          <p className='text2'>Bonôs mensal em porcentagem</p>
          <input onChange={Bonus} type="Number" placeholder='   0'/>
          <p className='text2'>Total de descontos</p>
          <input onChange={Descontos} type="Number" placeholder='   0'/>
          <button onClick={resposta} >Executar</button>
        </div>

        <p id='result'>Seu salário líquido é de R${resultado.toFixed(2)}</p>
      
      </div>

    </div>
    
  );
}


