import { connect } from "react-redux";
import Cards from "../cards/Cards";

function Favorites({myFavorites}){
  return(
    <div>
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