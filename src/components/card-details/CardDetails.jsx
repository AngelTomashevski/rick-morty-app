
import "./CardDetails.scss"
import {useParams, useNavigate} from "react-router-dom"
import useFetch from '../../hooks/useFetch';
import { apiUrl } from "../../constants";
import LoadingMsg from "../loading-msg/LoadingMsg";



const CardDetails = () => {
   
    const {charId} = useParams();
    const navigate= useNavigate();
    const {data:charachter, isLoading} = useFetch(apiUrl,`character/${charId}`)

    const goBack = () =>{
        navigate(-1)
    }
  
  
    return (
    <div className='card-details'>
        {isLoading && <LoadingMsg/>}
        <img className='char-img' src={charachter?.image} alt={charachter?.name} />
        <h2>{charachter?.name}</h2>
        <p>{charachter?.gender}</p>
        <p>{charachter?.origin?.name}</p>
        <p>{charachter?.name} appears in {charachter?.episode?.length} {charachter?.episode?.length === 1 ? "episode": "episodes"}</p>
        <button className='card-details-btn' onClick={goBack}>Go back</button>
    </div>
  )
}

export default CardDetails