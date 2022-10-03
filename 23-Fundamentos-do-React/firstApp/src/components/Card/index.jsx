import './styles.css';

export function Card({name, time}){ // acessando as propriedadescom o destructuring
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}

// podemos também usar o props nos parâmetros da função e acessar com o props.nome-da-propriedade