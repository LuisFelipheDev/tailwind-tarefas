import { useState } from "react"
import Tarefa from "../../model/Tarefa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface FormularioProps{
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props:FormularioProps) {

    const [descricao,setDescricao] = useState('')
    
    function criarNovaTarefa() {
        if(descricao?.trim().length > 0){
            const novaTarefa = Tarefa.criarAtiva(Math.random(),descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }
    }

    return(
        <div className="flex flex-1 justify-center">
            <input type="text" value={descricao} 
                placeholder="Informe sua proxima tarefa"
                onChange={e => {setDescricao(e.target.value)}} 
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false }
                className={`
                py-2 px-3 rounded-lg border-2 w-1/2
                text-2xl
                border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600
                `}
                />
                <button onClick={criarNovaTarefa} className={`ml-3 bg-purple-600 
                text-white text-xl px-5 py-4 focus:outline-none rounded-lg
                `}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    )
}