import {Link} from "react-router";

export const ModelNotFound = () => {

    return <>
        <h5>Модель отсутствует</h5>
        <button>
            <Link to={'/'} >
                на главную
            </Link>
        </button>

    </>

}