import Card from '../card/Card';
import styled from "./Cards.module.css"

export default function Cards(props) {
   return(
      <div className={styled.cards}>
         {props.characters.length > 0 ? props.characters.map(({id, name, species, status, gender, origin, image }) => {
          return <Card 
            key= {id}
            id= {id}
            name= {name}
            status= {status}
            species= {species}
            gender= {gender}
            origin= {origin}
            image= {image}
          />;
        }) : <h1>No hay personajes para mostrar</h1>}
      </div>
   );
}
