import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css"
import { NavLink, Link } from "react-router-dom";
import logo from "../imagenes/LogoRyMSinFondo.png"

export default function Nav(){
    return(
        <div className={styled.nav}>
            <div className={styled.contenedorLogo}>
                <Link to='/home'>
                    <img src={logo} alt="Rick and Morty" className={styled.logo} />
                </Link>
            </div>

            <div className={styled.botones}>
                <NavLink
                to='/about'
                className={styled.links}
                >About
                </NavLink>

                <NavLink
                to='/home'
                className={styled.links}
                >Home
                </NavLink>

                <NavLink
                to='/favorites'
                className={styled.links}
                >Favorites
                </NavLink>
            </div>

            <div className={styled.barraBuscar}>
                <SearchBar />
            </div>
        </div>
    )
}