import Button from '../Eventos/Button'

function Evento({numero}){

    function meuEvento(){
        console.log(`Ativando Primeiro evento`)
    }

    function SegundoEvento(){
        console.log("Segundo evento")
    }

    return (
        <div>
            <p>Clique aqui</p>
            <Button event={meuEvento} text="Meu primeiro botao"/>
            <Button event={SegundoEvento} text="Meu Segundo botao"/>
        </div>
    )
}

export default Evento