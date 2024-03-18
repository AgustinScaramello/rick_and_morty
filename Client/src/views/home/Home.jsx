import { useSelector} from "react-redux"
import Cards from "../../components/cards/Cards"

export default function Home(){
    const characters = useSelector((state) => state.allCharacters)

    return(
        <div>
            <Cards characters={characters} />
        </div>
    )
}