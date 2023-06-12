import React from "react";
import styled from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styled.buscador}>
         <input className={styled.inputbuscar} type='search' onChange={handleChange}/>
         <button className={styled.botonagregar} onClick={()=>onSearch(id)}>AGREGAR</button>
      </div>
   );
}
