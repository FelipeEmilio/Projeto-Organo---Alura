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

    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label = "Nome" placeholder = "Digite o seu nome"/>
                <CampoTexto label = "Cargo" placeholder = "Digite o seu cargo"/>
                <CampoTexto label = "Imagem" placeholder = "Digite o endereço da imagem"/>
                <ListaSuspensa label = "Time" itens={Times}/>
            </form>
        </section>
    )

}

