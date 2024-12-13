import Botao from '../Botao'
import CampoTexto from '../CampoText'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = () => {

    const Times = [
        'Front-end',
        'Back-end',
        'Data Base',
        'Redes',
        'Devops'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={Times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )

}

