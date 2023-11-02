import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useApi} from "../context/ApiContext.tsx";
import {Character} from "../types/Character.tsx";
import ListLoader from "./ListLoader.tsx";
import userImage from '../assets/sampleuser.avif';
import {Button, Card, CardBody, CardFooter, Image, Text, Heading, Stack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export default function CharacterInfo() {
    const [userData, setUserData] = useState<Character | null>(null)
    const [loading, setLoading] = useState(false);

    const params = useParams()
    const {apiInstance} = useApi()
    const navigator = useNavigate();

    useEffect(() => {
        const id = params.id;
        if (id) {
            setLoading(true);
            apiInstance?.get(`people/${id}`).then((res) => {
                setUserData(res.data as Character);
                setLoading(false);
            })
        }
    }, []);

    const RenderUserData = () => {
        if (loading) {
            return (
                <ListLoader/>
            )
        } else {
            return (
                <div className={'character-info-parent'}>
                    <div className={'back-button'}>
                        <Button onClick={() => {
                            navigator({pathname: '/'})
                        }} leftIcon={<ArrowBackIcon/>}>Go Back</Button>
                    </div>
                    <div className={'character-info'}>
                        <Card
                            direction={{base: 'column', sm: 'row'}}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                w={300}
                                margin={"30px"}
                                h={300}
                                src={userImage}
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody marginTop={"30px"} >
                                    <Heading size='lg'>{userData?.name}</Heading>

                                    <Text size={'md'} py='2'>
                                        {userData?.birth_year}, {userData?.mass}kg, {userData?.height}cm
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy Latte
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={'user-data-parent'}>
            <RenderUserData/>
        </div>
    )
}