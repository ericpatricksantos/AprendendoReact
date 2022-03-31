function Saudacao({nome}){

function GerarSaudacao(algumNome){
    return ` Olá, ${algumNome}, td bem?`
}

    return(
        <>
            {nome &&   <p>{GerarSaudacao(nome)}</p>}       
        </>
    )
}

export default Saudacao