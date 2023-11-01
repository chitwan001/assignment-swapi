import {useApi} from "../context/ApiContext.tsx";
import {useEffect} from "react";

export default function Home(){
    const {apiInstance} = useApi()
    useEffect(() => {
        if(apiInstance){
            apiInstance.get("people").then((res) => {
                console.log(res);
            })
        }
    }, [apiInstance]);
    return(
        <div>

        </div>
    )
}