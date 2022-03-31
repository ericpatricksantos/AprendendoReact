function Lista({itens}){

    return(
        <>
        
        <h3>Lista</h3>
        {
            itens.length > 0 ? (
                itens.map((item, index) =>(
                    <p key={index}>
                        {item}
                    </p>
                ))
            ) : (
               <p> Nao ha itens na lista</p>     
            )   
        }
        </>
    )
}

export default Lista