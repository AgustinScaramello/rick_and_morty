import React from "react";
import { useDispatch} from "react-redux"
import styled from "./SearchBar.module.css"
import { useState } from "react";
import {getCharById} from "../../redux/actions"

export default function SearchBar() {
   const dispatch = useDispatch()

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const onSearch = (id) =>{
      dispatch(getCharById(id))
   }

   return (
      <div className={styled.search}>
         <input className={styled.inputbuscar} type='search' onChange={handleChange}/>
         <button className={styled.botonagregar} onClick={()=>onSearch(id)}>AGREGAR</button>
      </div>
   );
}
