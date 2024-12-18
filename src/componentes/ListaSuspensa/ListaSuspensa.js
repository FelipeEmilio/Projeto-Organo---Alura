import './ListaSuspensa.css'

export const ListaSuspensa = ({ label, itens, required, valor, aoAlterado}) => {

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""> </option>
                {itens.map(item => (<option key={item}>{item}</option>))}
            </select>
        </div>
    )

}

