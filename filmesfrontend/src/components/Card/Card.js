import'./Card.scss';

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.image} 
            alt={props.name}
            />
            <h1>{props.name}</h1>
            <h5>{props.ano} {props.genero}</h5>
            <span>{props.resumo}</span>
            <span>{props.elenco}</span>



        </div>
    )
}