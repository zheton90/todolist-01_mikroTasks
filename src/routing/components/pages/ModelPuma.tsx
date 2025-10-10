import {useParams} from "react-router";
import {pumaArr} from "./Puma.tsx";
import {ModelNotFound} from "./ModelNotFound.tsx";

export const ModelPuma = () => {

    const params = useParams();

    const paramsModel = params.model;

    const element = pumaArr.find(el => el.model === paramsModel)

    return <div>
        <h3 style={{textAlign: 'center'}}>Model Puma</h3>
        {element ?
            <div style={{textAlign: 'center'}}>
                <h6>{element.model}</h6>
                <h6>{element.collection}</h6>
                <img style={{width: "400px", height: '400px'}} src={element?.picture} alt=""/>
                <h6>{element.price}</h6>
            </div> :
            <ModelNotFound />
        }
    </div>
}