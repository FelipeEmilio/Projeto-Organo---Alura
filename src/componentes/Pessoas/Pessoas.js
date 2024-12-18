import './Pessoas.css'

export const Pessoas = ({imagem, nome, cargo}) => {
    
    return(
        <div className='pessoas'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
  
}