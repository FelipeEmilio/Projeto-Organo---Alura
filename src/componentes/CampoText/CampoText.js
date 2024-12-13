import './CampoText.css'

export const CampoTexto = (props) => {
    
    const placeholderModif = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder = {placeholderModif}/>
        </div>
    )

}