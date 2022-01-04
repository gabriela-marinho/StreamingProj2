import './Frame.scss';

export default function Frame(props){
    return(
        <div className='frame__image'>
            <img
              src={props.image}
              alt={props.imageAlt}
            />
            <div className='frame__textLine'>
                <h2>{props.text}</h2>
            </div>  
        </div>
    )
}