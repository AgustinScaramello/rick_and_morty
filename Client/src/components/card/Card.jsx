import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addFav, removeFav, removeChar } from "../../redux/actions"
import styled from "./Card.module.css"

export default function Card({ id,
   name,
   species,
   status,
   gender,
   origin,
   image,
   }) {

   const allFavorites = useSelector((state) => state.allFavorites)
   
   const dispatch = useDispatch()

   const onClose = (id) => {
      dispatch(removeChar(id))
   };

   const [isFav, setIsFav] = useState(false);

   // const handleFavorite = () => {
   //    isFav ? dispatch(removeFav(id)) : dispatch(addFav({
   //       id, 
   //       name,
   //       species,
   //       status,
   //       gender,
   //       origin,
   //       image,
   //    }))
   //    setIsFav(!isFav)
   // }

   const handleFavorite = () => {
      const existsFav = allFavorites.some((fav) => fav.id === id)
      if(allFavorites.length > 0 && existsFav){
         dispatch(removeFav(id))
      }else{
         dispatch(addFav({
            id, 
            name,
            species,
            status,
            gender,
            origin,
            image,
         }))
         setIsFav(!existsFav)
      }
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
         <h2 className={styled.fuente}>Origen: {origin.name? origin.name : origin}</h2>
      </div>
   );
}