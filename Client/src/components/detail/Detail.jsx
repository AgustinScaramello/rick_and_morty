import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "./Detail.module.css";

export default function Detail() {
    
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
                <div className={styled.divGeneral}>
                    <img src={character.image} alt={character.name} className={styled.imagen} />
                    <div className={styled.divInfo}>
                        <h1 className={styled.name}>{character.name}</h1>
                        <h2 className={styled.fuente}>Estado: {character.status}</h2>
                        <h2 className={styled.fuente}>Especie: {character.species}</h2>
                        <h2 className={styled.fuente}>Genero: {character.gender}</h2>
                        <h2 className={styled.fuente}>Origen: {character.origin?.name}</h2>
                    </div>
                </div>
        )
};
