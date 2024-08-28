import './Index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/head/Index.jsx';

export default function Exercicio12(){
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState (0);
  const [masculino_feminino,setMasculino_feminino] = useState("")
  const [pessoas, setPessoas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function Nomezin(e){
    let inserir_nome = e.target.value;
    setNome(inserir_nome) 
  }
  function Idadezin(e){
    let inserir_idade = Number(e.target.value);
    setIdade(inserir_idade) 
  }
  function Masculino_feminino(e){
    let checked = e.target.value;
    setMasculino_feminino(checked) 
  }

  function add_card_person() {
    if (nome && idade && masculino_feminino) {
      const novoCard = { nome, idade, sexo: masculino_feminino };

      if (editIndex !== null) {
        const novaLista = pessoas.map((pessoa, index) =>
          index === editIndex ? novoCard : pessoa
        );
        setPessoas(novaLista);
        setEditIndex(null); // Resetando o índice de edição
      } else {
        setPessoas([...pessoas, novoCard]);
      }

      setNome("");
      setIdade(0);
      setMasculino_feminino("");
    }
  }
  function editarItem(index) {
    const pessoa = pessoas[index];
    setNome(pessoa.nome);
    setIdade(pessoa.idade);
    setMasculino_feminino(pessoa.sexo);
    setEditIndex(index); // Define o índice do item a ser editado
  }

  function removerItem(index) {
    const novaLista = pessoas.filter((item, i) => i !== index);
    setPessoas(novaLista);
  }

  return (
    <div className='pagina-exercicio12'>
        <Head/>
        <div className="body-exercicio-three">
          <div className="descrissao-pagina">
            <Link className='arrow' to="/"><img src="/assets/image/seta.png" alt="" /></Link>
            <h2>Exercício 12 - Comparador de pessoas</h2>
          </div>
          
            <hr className='line3' />
          
            <p className='text-question'>Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.</p>     
        </div>
        <div className='question12'>
          <div className="card_information_pessoas">
            <h3>Nome</h3>
            <input onChange={Nomezin} className='input_text' type="text" />
            <h3>Idade</h3>
            <input onChange={Idadezin} className='input_text' type="text" />
            <h3>Sexo</h3>
            <div className="buttons_select">
            <input value="Masculino" type="radio" checked= {masculino_feminino === "Masculino"} onChange={Masculino_feminino}/>
            <p>Masculino</p>
            <input value="Feminino" type="radio" checked= {masculino_feminino === "Feminino"} onChange={Masculino_feminino}/>
            <p>Feminino</p>
            </div>
            <button onClick={add_card_person}>Executar</button>
          </div>
          <div className="information_create">
            <h4>Pessoas</h4>
            <hr className='line-pessoas' />
            <div className="cards_with_informations" >
              {pessoas.map((pessoa, index) => (
                <div key={index} className='card_pessoa'>
                  <h5>{pessoa.nome}</h5>
                  <h5>{pessoa.idade} anos</h5>
                  <p>{pessoa.sexo}</p>
                  <div className="apagar-editar">
                    <button className='edit' onClick={() => editarItem(index)}>Editar</button>
                    <div className="linha-vertical"></div>
                    <button className='dell' onClick={() => removerItem(index)}>Apagar</button>
                  </div>
                </div>
                
            ))}
            </div>
          </div>
        </div>
      </div>
  )

}