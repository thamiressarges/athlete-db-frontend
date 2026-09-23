import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import JogadorList from './components/jogadorList';

function App() {

  const [jogadorList, setJogadorList] = useState([{}])
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [time, setTime] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/jogadores')
    .then(res => {
      console.log("Jogador Cadastrado")
      setJogadorList(res.data)
    }).catch(
      (err) => {console.log(err)}
    )
  })

  const adicionaJogador = () => {
    const jogador = {
      'nome': nome,
      'idade': idade,
      'time': time
    }

    axios.post('http://127.0.0.1:8000/jogadores', jogador)
    .then(res => {
      alert(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='container'>
      <div
        className='mt-3 justify-content-center align-items-center mx-auto'
        style={{"width": "70vw", "backgroundColor": "#ffffff"}}
      >
        <h2 className='text-center text-white bg-success card mb-1'>Athlete DB</h2>

        <h6 className='card text-center text-white bg-success mb-2 pb-1'>Informações de Jogadores</h6>
      
        <div className='card-body text-center'>
          <h5 className='card text-center text-white bg-dark mb-2 pb-1'>Cadastro Jogador</h5>
          <span className='card-text'>
            <input onChange={e => setNome(e.target.value)} className='mb-2 form-control' placeholder='Informe o nome'/>
            <input onChange={e => setIdade(e.target.value)} className='mb-2 form-control' placeholder='Informe a idade'/>
            <input onChange={e => setTime(e.target.value)} className='mb-2 form-control' placeholder='Informe o time'/>
            <button onClick={adicionaJogador} className='btn btn-outline-success mb-4'>Cadastrar</button>
          </span>
          <h5 className='card text-center text-white bg-dark mb-4 pb-1'>Lista de Jogadores</h5>
          <div>
            <JogadorList jogadorList={jogadorList}/>
          </div>
        </div>
        <h6 className='card text-center text-light bg-success pb-1'>&copy; Thamires Sarges - 2026</h6>
      </div>
    </div>
  );
}

export default App;
