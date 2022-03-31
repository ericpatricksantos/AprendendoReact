import {useState} from 'react'

function Condicional(){

    const[email, setEmail] = useState()
    const [UserEmail, setUserEmail] = useState()



    function EnviarEmail(event){
        event.preventDefault()
        console.log("Testando")
        setUserEmail(email)
    }


    
    function limparEmail(event){
        event.preventDefault()
        console.log("limpou")
        setUserEmail("")
    }

    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value) }/>
                <button onClick={EnviarEmail} >Enviar email</button>
            </form>

            {UserEmail && (
                <div>
                    <p>O email do usuario é {UserEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional