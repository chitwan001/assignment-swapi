import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <div className={'layout'}>
            <Header/>
            <div className={'outlet-parent'}>
                <div className={'outlet'}>
                    <Outlet/>
                </div>
                <div></div>
            </div>
        </div>
    )
}