import Pessoas from '../Pessoas/index'
import './Time.css'

export const Time = ({nome, corPrimaria ,corSecundaria}) => {

    const css1 = { backgroundColor: corSecundaria }
    const css2 = { borderColor: corPrimaria }
    return (
        <section className='time' style={css1}>
            <h3 style={css2}>{nome}</h3>
            <Pessoas />
        </section>
    )

}