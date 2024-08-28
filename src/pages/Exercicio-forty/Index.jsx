import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio4() {
  const [nomelivro, setNomelivro] = useState("")
  const [qtdpaginas, setQtpaginas] = useState(0)
  const [segundos, setSegundos] = useState(0)
  const [resultadolivro, setResultadolivro] = useState(0)

  function Nome_livro(e){
    let nome_livro = e.target.value;
    setNomelivro(nome_livro)
  }
  function Quatidade_paginas(e){
    let qtd_paginas = Number(e.target.value);
    setQtpaginas(qtd_paginas)
  }
  function Segundos(e){
    let qtd_segundos = Number(e.target.value);
    setSegundos(qtd_segundos)    
  }

  function button_executar(){
    let calculolivroone = (segundos * qtdpaginas)/3600 
    setResultadolivro(calculolivroone)
  }

  return (
    <div className="pagina-Exercicio4">
     <Head/>
      <div className="body-exercicio-one">
        
        <div className="descrissao-pagina">
        <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
        <h2>Exercício 04 - Leitura do livro</h2>
        </div>
        
        <hr className='line' />
        
        <p className='text-question'>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em <br/> segundos de leitura por página</p>
        
         <div className="card-result4">
          <p>Nome do livro</p>
          <input onChange={Nome_livro} type="text" placeholder='   Digite o nome do livro'/>
          <p className='text2'>Total de páginas</p>
          <input onChange={Quatidade_paginas} type="Number" placeholder='   0'/>
          <p className='text2'>Tempo em segundos de leitura</p>
          <input onChange={Segundos} type="Number" placeholder='   0'/>
          <button onClick={button_executar}>Executar</button>
        </div>

        <p id='result'>Você lerá {nomelivro} em {resultadolivro.toFixed(2)}</p>
      
      </div>

    </div>
    
  );
}


