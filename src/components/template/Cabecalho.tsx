export default function Cabecalho(props) {
    return(
        <div className="flex h-1/3 bg-img-tarefas bg-no-repeat bg-cover">
            <div className={`h-full bg-gradient-to-r from-gray-500 to-red-200 flex flex-1
             via-transparent justify-center items-center
            `}>
                {props.children}
            </div>
        </div>
    )
}