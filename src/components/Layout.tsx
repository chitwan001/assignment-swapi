import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className={'layout'}>
            <Header/>
            <Outlet/>
        </div>
    )
}