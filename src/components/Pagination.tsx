import {useEffect, useState} from "react";
import * as lsh from "lodash";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import PageButton from "./PageButton.tsx";

export default function Pagination({pages, currentPage, getPeopleList}: { pages: number, currentPage: number, getPeopleList: (pageNo: number) => void }) {
    const [pageNos, setPageNos] = useState<number[]>([])
    useEffect(() => {
        setPageNos(lsh.range(1, pages + 1))
    }, [pages]);

    useEffect(() => {
        const prevBtn = document.getElementById("pagination-previous-btn") as HTMLButtonElement;
        prevBtn.disabled = currentPage === 1;

        const nextBtn = document.getElementById("pagination-next-btn") as HTMLButtonElement;
        nextBtn.disabled = currentPage === pages;
    }, [currentPage,pages]);

    return (
        <div className={'pagination-parent'}>
            <div className={'pagination'}>
                <Button width={122} id={"pagination-previous-btn"} onClick={() => {
                    getPeopleList(currentPage - 1);
                }} leftIcon={<ArrowBackIcon/>} colorScheme='darkBlue' variant='solid'>
                    Previous
                </Button>
                <div className={'pagenumbers'}>
                    {
                        pageNos.map((pageNo) => (
                            <PageButton currentPage={currentPage} pageNo={pageNo} onButtonClick={() => {
                                getPeopleList(pageNo)
                            }} key={'page' + pageNo}/>
                        ))
                    }
                </div>
                <Button width={122} id={"pagination-next-btn"} onClick={() => {
                    getPeopleList(currentPage + 1);
                }} rightIcon={<ArrowForwardIcon/>} colorScheme='darkBlue' variant='solid'>
                    Next
                </Button>
            </div>
        </div>
    )
}