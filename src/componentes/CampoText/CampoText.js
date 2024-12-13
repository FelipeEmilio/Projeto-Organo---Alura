import './CampoText.css'

export const CampoTexto = (props) => {
    
    const placeholderModif = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder = {placeholderModif}/>
        </div>
    )

}