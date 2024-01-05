import styled from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";
import logo from "../imagenes/LogoRyMSinFondo.png";

export default function Form (props) {
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [name]: value})
        setErrors(validation({...userData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userLogin(userData);
    }


    return(
        <div className={styled.div}>
        <form className={styled.form}>
            <img src={logo} alt="Rick and Morty" className={styled.logo} />
            <div>
                <label htmlFor="" className={styled.label}>CUENTA</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="example@mail.com (rym@mail.com)" autoComplete="off" className={styled.input} />
                <p className={styled.errors}>{errors.email}</p>
            </div>

            <div>
                <label htmlFor="" className={styled.label}>PASSWORD</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Contraseña...(del 1 al 8)" className={styled.input} />
                <p className={styled.errors}>{errors.password}</p>
            </div>

            <button onClick={handleSubmit} className={styled.submit}>SUBMIT</button>
        </form>
        </div>

    );
};