import { useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react";
import { filterCards, orderCards, getAllFav } from "../../redux/actions";
import Cards from "../../components/cards/Cards";
import styled from "./Favorites.modules.css"

export default function Favorites(){

    const myFavorites = useSelector((state) => state.myFavorites)
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
      };

      const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
      };

      useEffect(() => {
        dispatch(getAllFav());
      }, []);
    

      return(
        <div>
          <div className={styled.botones}>
            <select onChange={handleOrder}>
              <option value="A" >Ascendente</option>
              <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
              <option value="Male">Masculino</option>
              <option value="Female">Femenino</option>
              <option value="Genderless">Sin Genero</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>
          <Cards characters={myFavorites}/>
        </div>
      )
}