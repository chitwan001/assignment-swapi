import React, {useContext} from "react";
import axios from "axios";
import {ApiContextType} from "../types/Context.ts";

const apiContextDefault: ApiContextType = {
    apiInstance: null
}
const ApiContext = React.createContext<ApiContextType>(apiContextDefault);
ApiContext.displayName = "ApiContext";

export const ApiProvider = (props: { children: React.ReactNode }) => {
    const apiInstance = axios.create({
        baseURL: "https://swapi.dev/api/",
    });
    apiInstance.defaults.headers.common['Accept'] = 'application/json';

    return (
        <ApiContext.Provider
            value={{apiInstance}}
            {...props}
        >
        </ApiContext.Provider>
    )
}

export const useApi = () => {
    const context = useContext(ApiContext);
    if (context !== undefined) {
        return context
    }
    throw new Error("useApi must be used within ApiProvider");
}