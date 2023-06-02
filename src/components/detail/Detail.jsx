import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
    
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
                <div>
                    <h1>Nombre: {character.name}</h1>
                    <h2>Estado: {character.status}</h2>
                    <h2>Especie: {character.species}</h2>
                    <h2>Genero: {character.gender}</h2>
                    <h2>Origen: {character.origin?.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
        )
};
