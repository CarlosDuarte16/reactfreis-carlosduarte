import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio1() {
  const [valorpedido, setValorpedido] = useState(0)
  const [valorcupom, setValorcupom] = useState(0)
  const [resultado, setResultado] = useState(0)

  function valor_pedido(e){
    let valor_pedido = Number(e.target.value);
    setValorpedido(valor_pedido)
  }
  function valor_cupom(e){
    let valor_cupom = Number(e.target.value);
    setValorcupom(valor_cupom)
  }
  function button_executar(e){
    let resultadoinicial = (valorcupom / 100)
    let resultadofinal = resultadoinicial * valorpedido;
    let resultadototal = valorpedido-resultadofinal;
    setResultado(resultadototal) 
  }

  return (
    <div className="pagina-Exercicio1">
     <Head/>
      <div className="body-exercicio-one">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 01 - Cupom de desconto</h2>
        </div>
        
        <hr className='line' />
        
        <p className='text-question'>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá <br /> de desconto.</p>
        
         <div className="card-result">
          <p>Informe o valor do pedido</p>
          <input onChange={valor_pedido} type="Number" placeholder='   0'/>
          <p className='text2'>Informe o valor de cupom</p>
          <input onChange={valor_cupom} type="Number" placeholder='   0'/>
          <button onClick={button_executar}>Executar</button>
        </div>

        <p id='result'>Resultado: O total é R${resultado.toFixed(2)}</p>
      
      </div>

    </div>
    
  );
}


