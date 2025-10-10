import {Navigate} from "react-router";
import {PATH} from "../../routes/router.tsx";

type Props = {
    children?: React.ReactNode;
};

export const ProtectedRoute = ({children}: Props) => {

    const logged = true


    return logged ? children : <Navigate to={PATH.ERROR404} />
};