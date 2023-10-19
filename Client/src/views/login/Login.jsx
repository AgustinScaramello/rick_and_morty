import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/Form";

export default function Login(){

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";

    const { data } = await axios(`${URL}?email=${email}&password=${password}`);

    try {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return(
    <div>
        <Form login={login}/>
    </div>
  )
}
