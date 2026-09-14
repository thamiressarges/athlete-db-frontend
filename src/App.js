import './App.css';

function App() {
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
            <input className='mb-2 form-control' placeholder='Informe o nome'/>
            <input className='mb-2 form-control' placeholder='Informe a idade'/>
            <input className='mb-2 form-control' placeholder='Informe o time'/>
            <button className='btn btn-outline-success mb-4'>Cadastrar</button>
          </span>
          <h5 className='card text-center text-white bg-dark mb-4 pb-1'>Lista de Jogadores</h5>
          <div>

          </div>
        </div>
        <h6 className='card text-center text-light bg-success pb-1'>&copy; Thamires Sarges - 2026</h6>
      </div>
    </div>
  );
}

export default App;
