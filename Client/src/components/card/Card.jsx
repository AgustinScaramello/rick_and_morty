import styled from "./Card.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions"
import { connect } from "react-redux";

function Card({ id,
   name,
   species,
   status,
   gender,
   origin,
   image,
   onClose,
   addFav, removeFav,myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({
         id, 
         name,
         species,
         status,
         gender,
         origin,
         image,
      })
      setIsFav(!isFav)
   }

   return (
      <div className={styled.card}>

         <div className={styled.fav}>
         {
            isFav ? (
               <button className={styled.corazon} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styled.corazon} onClick={handleFavorite}>🤍</button>
            )
         }
         </div>

         <img src={image} alt={name} className={styled.imagen}/>

         <button className={styled.boton} onClick={()=>onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`} className={styled.linkNombre}>
            <h2 className={styled.name}>{name}</h2>
         </Link>
         
         <h2 className={styled.fuente}>Estado: {status}</h2>
         <h2 className={styled.fuente}>Especie: {species}</h2>
         <h2 className={styled.fuente}>Genero: {gender}</h2>
         <h2 className={styled.fuente}>Origen: {origin}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);