import './Home.scss';
import { useState , useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame'
import Card from '../../components/Card/Card';
import axios from 'axios';
export default function Home(){

   const [filmes, setFilmes] = useState([]);
   const [feito, setFeito] = useState(false);
    useEffect(() => {
      
      
      const getFilmes = async () => {
         await axios.get('/movie/findMany')
         .then(response => {
            if(feito){
              setFilmes(response.data);
  
            }
         })
      }
       setFeito(true)
       getFilmes()
    },[(feito)])

    return(
        <div className= 'home'>
            <Navbar />
            <Frame
                image= "https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/43222211_m.jpg"
                imageAlt="Rolo de filme"
                text=""
            />
            <div className='home__cards'>
                
                {
                   filmes.map(item =>(
                     <Card
                        image={item.cover}
                        ano={item.year}
                        genero={item.genres}
                        name={item.title}
                        resumo={item.resume}
                        elenco={item.cast}

                   />
                   ))
                }
                
            </div>
        </div>
    )
}