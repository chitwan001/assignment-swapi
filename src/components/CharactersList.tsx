import Pagination from "./Pagination.tsx";
import {useApi} from "../context/ApiContext.tsx";
import {useEffect, useState} from "react";
import {Characters} from "../types/Character.tsx";
import ListLoader from "./ListLoader.tsx";
import CharacterCard from "./CharacterCard.tsx";
import {SimpleGrid} from "@chakra-ui/react";

export default function CharactersList() {
    const [characters, setCharacters] = useState<Characters>([])
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const {apiInstance} = useApi()

    const RenderList = () => {
        if (loading) {
            return (
                <ListLoader/>
            )
        } else {
            return (
                <SimpleGrid columns={5} spacing={10}>
                    {
                        characters.map((character, ind) => (
                            <CharacterCard key={'character-' + ind} info={character}/>
                        ))
                    }
                </SimpleGrid>
            )
        }
    }

    const getPeopleList = (pageNo: number) => {
        let route = "people";
        if (pageNo >= 1) {
            route += `/?page=${pageNo}`
        }
        setCurrentPage(pageNo);
        setLoading(true);
        if (apiInstance) {
            apiInstance.get(route).then((res) => {
                const data = res.data.results as Characters
                setCharacters(data)
                setLoading(false)
            })
        }
    }

    useEffect(() => {
        //load characters on page start and when api instance is established
        setLoading(true);
        if (apiInstance) {
            apiInstance.get("people").then((res) => {
                const data = res.data.results as Characters
                setPages(Math.ceil(res.data.count / 10))
                setCharacters(data)
                setLoading(false)
            })
        }
    }, [apiInstance]);

    return (
        <>
            <div className={'characters-list-parent'}>
                <RenderList/>
            </div>
            <Pagination getPeopleList={getPeopleList} pages={pages} currentPage={currentPage}/>
        </>
    )
}