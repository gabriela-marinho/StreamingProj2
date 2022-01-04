import'./Card.scss';

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.image} 
            alt={props.name}
            />
            <span>{props.name}</span>

        </div>
    )
}