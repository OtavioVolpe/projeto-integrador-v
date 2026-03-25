import { useState } from 'react'
import './App.css'

function App() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        cidade: "",
        perfil: "",
        receberNovidades: false,
        observacoes: ""
    });

    function handleChange(event){
        const{ name, value, type, checked } = event.target;

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log("Nome: ", form.nome);
        console.log("email: ", form.email);
        console.log("cidade: ", form.cidade);
        console.log("perfil: ", form.perfil);
        console.log("receberNovidades: ", form.receberNovidades);
        console.log("observacoes: ", form.observacoes);
    }

    return(
        <div>
            <h2>Cadastro por Formulário</h2><form onSubmit={handleSubmit}>

            <div>
                <label>Nome: </label>
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Cidade: </label>
                <input
                    type="text"
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Perfil: </label>
                <input
                    type="text"
                    name="perfil"
                    value={form.perfil}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Receber Novidades: </label>
                <input
                    type="checkbox"
                    name="receberNovidades"
                    value={form.receberNovidades}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Observações: </label>
                <input
                    type="text"
                    name="observacoes"
                    value={form.observacoes}
                    onChange={handleChange} />
            </div>

            <button type="submit">Cadastrar</button>


            <h3>Dados digitados:</h3>
            <pre>{JSON.stringify(form, null, 2)}</pre>


        </form>
        </div>
    )
}

export default App