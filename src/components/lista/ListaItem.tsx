import Selecao from "./selecao"

interface ListaItemProps{
    valor:string
    concluido: boolean
    alterarStatus: () => void
}

export default function ListaItem(props:ListaItemProps) {
    const extiloTexto = props.concluido ? 'line-through text-gray-300' : 'text-gray-500'

    return(
        <li onClick={props.alterarStatus} className={`
            bg-white text-black p-5 border-b border-gray-400    
            flex items-center cursor-pointer text-xl
        `}>
            <Selecao valor={props.concluido} />
            <span className={`font-light ml-5 ${extiloTexto}`}>{props.valor}</span>
        </li>
    )
}