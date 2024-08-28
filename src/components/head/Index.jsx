import './Index.scss';
import { Link } from 'react-router-dom';

export default function Head(){
return(
  <div className='head'>
    <div className='head-left'>
      <img src="./assets/image/Logo Frei.png" alt="Logo" />
      <h1>React FreiS</h1>
    </div>
    <div className="head-rigth">
        <Link className='a' to="/">Início</Link>
        <Link className='a' to="./Sobre-nos">Sobre</Link>
      </div>
    </div>
)


}