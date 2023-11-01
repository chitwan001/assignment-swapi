import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/stylings/index.css'
import {ApiProvider} from "./context/ApiContext.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ApiProvider>
            <App/>
        </ApiProvider>
    </BrowserRouter>
)
