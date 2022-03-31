import {useState} from 'react'

function Form(){

    function cadastraUsuario(event){
        event.preventDefault()
        console.log(name)
        console.log(senha)
        console.log(`O usuário ${name} foi cadastrado com a senha: ${senha} `)
    }

    const[name, setName] = useState()
    const[senha, setSenha] = useState()
    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="nome" name="nome"
                    onChange={ (e) => setName(e.target.value)}
                    placeholder="Digite o nome"/>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" id="senha" name="senha"
                    onChange={ (e) => setSenha(e.target.value)}
                    placeholder="Digite a senha"/>
                </div>
                <div>
                <input type="submit" value="Cadastro"/>
                </div>
            </form>
        </div>
    )
}


export default Form