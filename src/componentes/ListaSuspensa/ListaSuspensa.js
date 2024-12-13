import './ListaSuspensa.css'

export const ListaSuspensa = ({ label, itens, required, onChange, value, aoAlterado}) => {

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={value}>
                {itens.map(item => (<option key={item}>{item}</option>))}
            </select>
        </div>
    )

}

