import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css"
import { NavLink, Link } from "react-router-dom";
import logo from "../imagenes/LogoRyMSinFondo.png"

export default function Nav(props){
    return(
        <div className={styled.nav}>

            <Link to='/home'>
                <img src={logo} alt="Rick and Morty" className={styled.logo} />
            </Link>
            

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

            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}