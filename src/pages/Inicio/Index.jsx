import Head from '../../components/head/Index.jsx';
import './Index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (


    <div className="pagina-inicio">
      <Head/>
      <div className="body">
        <h3>Escolha um treino...</h3>
        <div className="cards">
        <Link to="./Exercicio-one" className='card-one'>
        <button className='button1'></button>
            <p className='text1'>Cupom de desconto</p>
            <p className='text2'>Exercício 01</p>
        </Link>
          <Link to="./Exercicio-two" className="card-one">
          <button className='button2'></button>
            <p className='text1'>Converter Kg/gramas</p>
            <p className='text2'>Exercício 02</p>
          </Link>
          <Link to="./Exercicio-three" className="card-one">
          <button className='button3'></button>
            <p className='text1'>valor total por quantidade</p>
            <p className='text2'>Exercício 03</p>
          </Link>
          <Link to="./Exercicio-forty" className="card-one">
          <button className='button4'></button>
            <p className='text1'>Leitura de livro</p>
            <p className='text2'>Exercício 04</p>
          </Link>
          <Link to="./Exercicio-five" className="card-one">
          <button className='button5'></button>
            <p className='text1'>Média de notas</p>
            <p className='text2'>Exercício 05</p>
          </Link>
        </div>
        <div className="cards2">
        <Link to="./Exercicio-six" className="card-one">
          <button className='button6'></button>
            <p className='text1'>Salário Liquido</p>
            <p className='text2'>Exercício 06</p>
          </Link>
          <Link to="./Exercicio-seven" className="card-one">
          <button className='button7'></button>
            <p className='text1'>Cores primárias</p>
            <p className='text2'>Exercício 07</p>
          </Link>
          <Link to="./Exercicio-eight" className="card-one">
          <button className='button8'></button>
            <p className='text1'>Temperatura</p>
            <p className='text2'>Exercício 08</p>
          </Link>
          <Link to="./Exercicio-nine" className="card-one">
          <button className='button9'></button>
            <p className='text1'>Sorveteria</p>
            <p className='text2'>Exercício 09</p>
          </Link>
          <Link to="./Exercicio-ten" className="card-one">
          <button className='button10'></button>
            <p className='text1'>Calculo de IMC com histórico</p>
            <p className='text2'>Exercício 10</p>
          </Link>
        </div>
        <div className="cards3">
        <Link to="./Exercicio-eleven" className="card-one">
          <button className='button11'></button>
            <p className='text1'>Tabuada</p>
            <p className='text2'>Exercício 11</p>
          </Link>
          <Link to="./Exercicio-twelve" className="card-one">
          <button className='button12'></button>
            <p className='text1'>Comparador de pessoas</p>
            <p className='text2'>Exercício 12</p>
          </Link>

        </div>
      </div>
    </div>
  );
}


