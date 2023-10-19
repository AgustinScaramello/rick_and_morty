import { useDispatch, useSelector} from "react-redux"
import Cards from "../../components/cards/Cards"
import {removeChar} from "../../redux/actions"

export default function Home(){
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.allCharacters)

    const onClose = (id) => {
        dispatch(removeChar(id))
      };

    return(
        <div>
            <Cards characters={characters} onClose={onClose}/>
        </div>
    )
}