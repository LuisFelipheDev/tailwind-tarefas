import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SelecaoProps{
    valor:boolean
}

export default function Selecao(props:SelecaoProps) {
    const gradiente = props.valor? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''
    
    return(
        <div className={`flex h-7 w-7 justify-center text-white
        items-center rounded-full cursor-pointer border border-gray-400 ${gradiente}
        `}>
            {props.valor ? <FontAwesomeIcon icon={faCheck} />: ''} 
        </div>
    )
}