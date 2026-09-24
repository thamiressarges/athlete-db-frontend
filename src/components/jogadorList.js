import React from "react";
import Jogador from './jogador'

function JogadorList(props) {
    return(
        <div>
            <ul>
                {
                    props.jogadorList.map(
                        (jogador,indice) => {
                            return (<Jogador 
                                jogador={jogador} 
                                 key={indice} 
                                setId={props.setId}
                                setNome={props.setNome}
                                setIdade={props.setIdade}
                                setTime={props.setTime}
                                setTextoBotao={props.setTextoBotao}
                            />)
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default JogadorList