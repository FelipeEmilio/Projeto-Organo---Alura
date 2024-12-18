import Pessoas from '../Pessoas/index'
import './Time.css'

export const Time = ({nome, corPrimaria ,corSecundaria, colaboradores}) => {

    const css1 = { backgroundColor: corSecundaria }
    const css2 = { borderColor: corPrimaria }
    return (
        <section className='time' style={css1}>
            <h3 style={css2}>{nome}</h3>
            <div className='p'>
                {colaboradores.map( pessoa => <Pessoas nome={pessoa.nome} cargo={pessoa.cargo} imagem={pessoa.imagem}/> )}
            </div>
        </section>
    )

}