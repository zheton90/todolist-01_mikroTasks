import {useParams} from "react-router";
import {adidasArr} from "./Adidas.tsx";

export const Model = () => {
    const params = useParams()

    const paramId = params.id as string
    console.log(params)

    return (
        <div style={{textAlign: "center"}}>
            <h5>{adidasArr[+paramId].model}</h5>
            <h3>{adidasArr[+paramId].collection}</h3>
            <img style={{width: "400px", height: '400px' }} src={adidasArr[+paramId].picture} alt={adidasArr[+paramId].model}/>
            <h3>{adidasArr[+paramId].price}</h3>
        </div>
    )
}