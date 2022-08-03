import { useState } from "react"
import Formulario from "../components/formulario/Formulario"
import Lista from "../components/lista/Lista"
import Cabecalho from "../components/template/Cabecalho"
import Conteudo from "../components/template/Conteudo"
import tarefasIniciais from '../data/mock'
import Tarefa from "../model/Tarefa"


export default function Home() {

  const [data,setData] = useState(tarefasIniciais)

  function novaTarefa(novaTarefa:Tarefa) {
      setData(data.adicionarTarefa(novaTarefa))
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefa} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={data} mudou={(novasTarefas)=> {
            setData(novasTarefas)
        } } />
      </Conteudo>
    </div>
  )
}
