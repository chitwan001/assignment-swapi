import {Card, CardBody, Heading, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {Film} from "../types/Film.tsx";
import ListLoader from "./ListLoader.tsx";
import axios from "axios";

export default function FilmCard({filmUrl}: { filmUrl: string }) {
    const [filmData, setFilmData] = useState<Film | null>(null)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(filmUrl).then((res) => {
            const data = res.data as Film;
            setFilmData(data);
            setLoading(false);
        })
    }, []);

    const RenderFilm = () => {
        if (loading) {
            return (
                <div className={'loader-parent'}>
                    <ListLoader/>
                </div>
            )
        } else {
            return (
                <>
                    <Heading size='md'>{filmData?.title}</Heading>
                    <Text size={'sm'} color={"gray.700"} py='2'>
                        {filmData?.release_date}
                    </Text>
                    <Text maxHeight={"100px"} overflowY={"scroll"} size={'sm'} py='2'>
                        {filmData?.opening_crawl}
                    </Text>
                </>
            )
        }
    }
    return (
        <Card placeSelf={'center'} minHeight={"200px"} maxHeight={'fit-content'} w={"200px"}>
            <CardBody>
                <RenderFilm/>
            </CardBody>
        </Card>
    )
}