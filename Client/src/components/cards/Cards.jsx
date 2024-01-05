import Card from '../card/Card';
import styled from "./Cards.module.css"

export default function Cards(props) {
   return(
      <div className={styled.cards}>
         {props.characters.map(({id, name, species, status, gender, origin, image }) => {
          return <Card 
            key= {id}
            id= {id}
            name= {name}
            status= {status}
            species= {species}
            gender= {gender}
            origin= {origin.name}
            image= {image}
            onClose = {props.onClose}
          />;
        })}
      </div>
   );
}
