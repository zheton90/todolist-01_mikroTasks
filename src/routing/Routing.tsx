
import s from './Routing.module.css'
import { NavLink, Outlet } from "react-router";

import styled from "styled-components";
import {PATH} from "./routes/router.tsx";

export const Routing = () => {

    return <div>
        <div className={s.header}><h1>HEADER</h1></div>
        <div className={s.body}>
            <div className={s.nav}>
                {/*ПРИМЕР styled components*/}
                <NavWrapper>
                    <NavLink to={`/${PATH.ADIDAS}`}> ADIDAS</NavLink>
                </NavWrapper>
                <div>
                    <NavLink
                        to={`/${PATH.PUMA}`}
                        className={({isActive}) => isActive ? s.activeNavLink : s.navLink}>
                        PUMA
                    </NavLink>
                </div>

                <div>
                    <NavLink to={`/${PATH.ABIBAS}`}
                             className={({isActive}) => isActive ? s.activeNavLink : s.navLink}>
                        ABIBAS
                    </NavLink>
                </div>
                <div>
                    <NavLink to={PATH.PRICES}
                             className={({isActive}) => isActive ? s.activeNavLink : s.navLink}>
                        PRICES for the sellers
                    </NavLink>
                </div>
                <div>
                    <NavLink to={PATH.PROTECTED}
                             className={({isActive}) => isActive ? s.activeNavLink : s.navLink}>
                        PROTECTED PAGE
                    </NavLink>
                </div>
            </div>
            <div className={s.content}>
                <Outlet/>
                {/*<Routes>*/}
                {/*    <Route path={'/'} element={<Navigate to={PATH.ADIDAS}/>}/>*/}
                {/*    <Route path={PATH.ADIDAS} element={<Adidas/>}/>*/}
                {/*    <Route path={PATH.PUMA} element={<Puma/>} />*/}
                {/*    <Route path={PATH.ABIBAS} element={<Abibas/>} />*/}
                {/*    <Route path={PATH.PRICES} element={<Prices/>} />*/}
                {/*    /!*<Route path={'/:mod/:id'} element={<Model/>} />*!/*/}
                {/*    <Route path={'/:mod/:model'} element={<ModelPuma/>} />*/}

                {/*    /!*<Route path={PATH.ERROR404} element={<Error404/>} />*!/*/}
                {/*    /!*<Route path={'*'} element={<Navigate to={PATH.ERROR404} />} />*!/*/}
                {/*    <Route path={'*'} element={<Error404/>} />*/}
                {/*</Routes>*/}
            </div>
        </div>
        <div className={s.footer}>abibas 2023</div>
    </div>
}

const NavWrapper = styled.div`
    margin-left: 10px;
    front-size: 20px;
    
    & > a {
        text-decoration: none;
        color: #1e3786;
    }
    
    & > a.active    {
        text-decoration: none;
        color: #03eaff;
    }
    
    & > a:hover {
        color: steelblue;
    }
`