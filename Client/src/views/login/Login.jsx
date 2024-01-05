import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions"
import Form from "../../components/form/Form";

export default function Login(){

  const access = useSelector((state) => state.access)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const userLogin = (userData) => {
    dispatch(login(userData))
    access && navigate("/home") 
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return(
    <div>
        <Form userLogin={userLogin}/>
    </div>
  )
}
