import React from "react";
import axios from "axios";

function Jogador(props){

    const excluiJogador = (id) => {
        axios.delete(`http://127.0.0.1:8000/jogadores/${id}`)
        .then(res => {
            alert('Jogador removido com sucesso')
        })
    }

    const editaJogador = (jogador) => {
        props.setId(jogador.id)
        props.setNome(jogador.nome)
        props.setIdade(jogador.idade)
        props.setTime(jogador.time)
        props.setTextoBotao('Atualizar')
    }

    return(
        <div>
            <p>
                <span className="fw-bold">
                    {props.jogador.nome} - {props.jogador.idade} - {props.jogador.time}
                </span>
                <button 
                    onClick={() => editaJogador(props.jogador)}
                    className="btn btn-sm"
                >
                    <span className="badge rounded-pill bg-info">Editar</span>
                </button>
                <button 
                    onClick={() => excluiJogador(props.jogador.id)}
                    className="btn btn-sm"
                >
                    <span className="badge rounded-pill bg-danger">X</span>
                </button>
            </p>
        </div>
    )
}

export default Jogador;