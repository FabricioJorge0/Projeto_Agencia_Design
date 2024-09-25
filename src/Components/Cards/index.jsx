import style from './Cards.module.css'

export default function Cards(props){
    return(
            <div className={props.ehTemaEscuro ? style.cardsEscuro : style.cardsClaro}>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.empresa}</small>
                <p>{props.paragrafo}</p>
            </div>

    )
}