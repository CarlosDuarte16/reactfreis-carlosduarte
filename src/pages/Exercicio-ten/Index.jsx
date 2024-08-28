import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index';


export default function Exercicio3() {
  
  const [valor_altura, setValor_altura] = useState(0);
  const [valor_peso, setValor_peso] = useState(0);
  const [adicionando, setAdicionando] = useState([]);

  function altura(e) {
    const valoraltura = Number(e.target.value);
    setValor_altura(valoraltura);
  }

  function peso(e) {
    const valorpeso = Number(e.target.value);
    setValor_peso(valorpeso);
  }

  function calcularIMC(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
  }

  function removerItem(index) {
    const novaLista = adicionando.filter((item, i) => i !== index);
    setAdicionando(novaLista);
  }

  function situacaoIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
    if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
    return "Obesidade";
  }

  function adicionar() {
    const imc = calcularIMC(valor_altura, valor_peso);
    const situacao = situacaoIMC(imc);

    let adicionei = {
      Altura: valor_altura,
      Peso: valor_peso,
      Situacao: situacao
    };

    setAdicionando([...adicionando, adicionei]);
    setValor_altura(0);
    setValor_peso(0);
  }

  return (
    <div className="pagina-Exercicio10">
      <Head/>
      <div className="body-exercicio-three">
        <div className="descrissao-pagina">
          <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
          <h2>Exercício 10 - Cálculo de IMC com histórico</h2>
        </div>
        
        <hr className='line3' />
        
        <p className='text-question'>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final,<br /> apresente o IMC e a situação</p>
        
        <div className="card-result2">
          <div className="inputs">
            <div className="input1">
              <p className='text1'>Altura</p>
              <input  onChange={altura} className='one' type="number" placeholder='   0'/>
            </div>
            <div className="input1">
              <p className='text2'>Peso</p>
              <input onChange={peso} className='one' type="number" placeholder='   0'/>
            </div>
          </div>
          <button onClick={adicionar}>Executar</button>
        </div>      
      </div>
      
      <div className="barras">
        {adicionando.map((item, index) => (
          <div key={index} className="historico-item">
            <button className='button-descrissao'>
              Peso: {item.Peso} | Altura: {item.Altura} | Situação: {item.Situacao}
            </button>
            <img className='img-lixeira' onClick={() => removerItem(index)} src="/assets/image/Lixeira.png" alt="Lixeira" />
          </div>
        ))}
      </div>
    </div>
  );
}
