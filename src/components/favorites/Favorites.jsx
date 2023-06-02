import { connect } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Favorites({myFavorites}){

  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);  
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return(
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin Genero</option>
        <option value="unknown">Desconocido</option>
      </select>
      <Cards characters={myFavorites}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps)(Favorites)