import styled from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

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
        props.login(userData);
    }


    return(
        <div className={styled.div}>
        <form className={styled.form}>
            <div>
                <label htmlFor="" className={styled.label}>Email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                <p>{errors.email}</p>
            </div>

            <div>
                <label htmlFor="" className={styled.label}>Password</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange} />
                <p>{errors.password}</p>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>

    );
};