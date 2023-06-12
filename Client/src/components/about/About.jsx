import foto from "../imagenes/fotoagustinscaramello.jpg"
import styled from "./About.module.css"

export default function About() {
    return(
        <div className={styled.divGeneral}>
            <img src={foto} alt="Agustin Scaramello" className={styled.foto}/>
            <div className={styled.divInfo}>
                <h1 className={styled.nombre}>Agustin Scaramello</h1>
                <h2 className={styled.fuente}>Estudiante de Henry - Programacion Full Stack</h2>
                <h3 className={styled.fuente}>Creador de la página</h3>
            </div>
        </div>
    );
};
