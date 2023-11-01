import {Button} from "@chakra-ui/react";
import {createRef, useEffect} from "react";

export default function PageButton({pageNo, onButtonClick, currentPage}: { pageNo: number, onButtonClick: () => void, currentPage: number }) {

    const buttonRef = createRef<HTMLButtonElement>()

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.disabled = pageNo === currentPage
        }
    }, [pageNo,currentPage]);

    return (

        <Button ref={buttonRef} onClick={onButtonClick} textColor={"white"} colorScheme={"purple"} variant='solid'>
            {pageNo.toString()}
        </Button>

    )
}