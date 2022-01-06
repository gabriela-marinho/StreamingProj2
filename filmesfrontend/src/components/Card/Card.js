import'./Card.scss';
import { useNavigate } from 'react-router-dom';
export default function Card(props){

    const navigate = useNavigate();
    const goFilme = () =>{
        navigate('/filme', {state:props.id})
    }
    return(
        <div className='card' onClick={goFilme} >
            <img src={props.image} 
            alt={props.name}
            />
            {/* <h1>{props.name}</h1>
            <h5>{props.ano} {props.genero}</h5>
            <span>{props.resumo}</span>
            <span>{props.elenco}</span> */}



        </div>
    )
}