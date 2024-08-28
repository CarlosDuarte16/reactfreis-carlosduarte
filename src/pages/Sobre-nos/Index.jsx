import './Index.scss';
import Head from '../../components/head/Index.jsx';

export default function Sobrenos() {
  return (
    <div className="pagina-sobre-nos">
      <Head/>
      <div className="body-sobre-nos">
        <h4>Sobre</h4>
        <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br/> aprimorar suas habilidades em Node.js e lógica de programação de forma prática e <br /> envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br /> aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br /> praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo <br /> que você avance no seu próprio ritmo e de acordo com suas necessidades.<br /> <br /> 
        Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br /> e desenvolver suas habilidades.
        <br />Estamos ansiosos para ver seu progresso e sucesso!</p>
        <img className='bottom-sobrenos' src = "/assets/image/Logo Frei.png"/>
      </div>
    </div>
  );
}


