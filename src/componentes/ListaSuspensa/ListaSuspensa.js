import './ListaSuspensa.css'

export const ListaSuspensa = ({label, itens, required}) => {

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={required}>
                {itens.map(item => (<option key={item}>{item}</option>))}
            </select>
        </div>
    )

}