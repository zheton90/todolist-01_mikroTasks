import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router";
import {router} from "./routing/routes/router.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
)
