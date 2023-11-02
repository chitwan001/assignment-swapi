import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useApi} from "../context/ApiContext.tsx";
import {Character} from "../types/Character.tsx";
import ListLoader from "./ListLoader.tsx";
import userImage from '../assets/sampleuser.avif';
import {
    Button,
    Card,
    CardBody,
    Image,
    Text,
    Heading,
    Stack,
    VStack,
    Tooltip,
    HStack
} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import Films from "./Films.tsx";

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
                    <div className={'character-info'}>
                        <Card
                            direction={{base: 'column', sm: 'row'}}
                            w={"100%"}
                            display={"grid"}
                            overflow='hidden'
                            variant='outline'
                        >
                            <VStack placeItems={'start'} justifyContent={"start"}>
                                <HStack display={"grid"} gridTemplateColumns={"auto 1fr 118px"} w={"100%"} placeItems={'start'}>
                                    <div className={'back-button'}>
                                        <Button onClick={() => {
                                            navigator({pathname: '/'})
                                        }} leftIcon={<ArrowBackIcon/>}>Go Back</Button>
                                    </div>
                                    <div className={'character-basic-details'}>
                                        <Image
                                            objectFit='cover'
                                            w={300}
                                            marginTop={"30px"}
                                            marginLeft={"30px"}
                                            h={300}
                                            src={userImage}
                                            alt='Caffe Latte'
                                        />

                                        <Stack>
                                            <CardBody marginTop={"30px"}>
                                                <Heading size='lg'>{userData?.name}</Heading>

                                                <Text size={'md'} py='2'>
                                                    {userData?.birth_year}, {userData?.mass}kg, {userData?.height}cm
                                                </Text>

                                                <VStack w={'fit-content'}>
                                                    {
                                                        userData?.eye_color !== 'n/a' && (
                                                            <Tooltip label={'Eye Color - ' + userData?.eye_color}>
                                                                <Button backgroundColor={userData?.eye_color} width={"4px"} borderRadius={8}/>
                                                            </Tooltip>
                                                        )
                                                    }
                                                    {
                                                        userData?.hair_color !== 'n/a' && (
                                                            <Tooltip label={'Hair Color - ' + userData?.hair_color}>
                                                                <Button backgroundColor={userData?.hair_color} width={"4px"} borderRadius={8}/>
                                                            </Tooltip>
                                                        )
                                                    }
                                                    {
                                                        userData?.skin_color !== 'n/a' && (
                                                            <Tooltip label={'Skin Color - ' + userData?.skin_color}>
                                                                <Button backgroundColor={userData?.skin_color} width={"4px"} borderRadius={8}/>
                                                            </Tooltip>
                                                        )
                                                    }
                                                </VStack>
                                            </CardBody>
                                        </Stack>
                                    </div>
                                </HStack>
                                <Heading marginLeft={"50px"} marginY={"20px"} size='md'>Known For:</Heading>
                                <div className={'character-films'}>
                                    {
                                        userData?.films && (
                                            <Films films={userData.films}/>
                                        )
                                    }
                                </div>
                            </VStack>
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