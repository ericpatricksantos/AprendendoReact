function SeuNome({setNome}){
    return(
        <div>
            <p>Digite</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
         
        </div>
    )
}


export default SeuNome