import {CircularProgress} from "@chakra-ui/react";

export default function ListLoader(){
    return(
        <div className={'list-loader'}>
            <CircularProgress isIndeterminate color='green.300' />
        </div>
    )
}