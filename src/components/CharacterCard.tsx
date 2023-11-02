import {Character} from "../types/Character.tsx";
import userImage from '../assets/sampleuser.avif';
import {
    Button,
    Image,
    Text,
    Card,
    CardBody,
    Heading,
    Stack,
    Tooltip, HStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export default function CharacterCard({info,personId}: { info: Character,personId:number }) {
    const navigator = useNavigate()
    return (
        <Card height={"fit-content"} cursor={"pointer"} onClick={() => {
            navigator({pathname:`people/${personId}`})
        }}>
            <CardBody>
                <Image
                    margin={"auto"}
                    src={userImage}
                    alt={info.name}
                    boxSize={"150px"}
                    borderRadius="100%"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' placeSelf={"center"}>{info.name}</Heading>
                    <Text color='blue.600' placeSelf={"center"} fontSize='md'>
                        {info.birth_year}
                        {
                            info.gender !== 'n/a' && (
                                <>, {info.gender.toLocaleUpperCase()}</>
                            )
                        }
                    </Text>
                    <HStack placeSelf={"center"}>
                        {
                            info.eye_color !== 'n/a' && (
                                <Tooltip label={'Eye Color - ' + info.eye_color}>
                                    <Button backgroundColor={info.eye_color} width={"4px"} borderRadius={8}/>
                                </Tooltip>
                            )
                        }
                        {
                            info.hair_color !== 'n/a' && (
                                <Tooltip label={'Hair Color - ' + info.hair_color}>
                                    <Button backgroundColor={info.hair_color} width={"4px"} borderRadius={8}/>
                                </Tooltip>
                            )
                        }
                        {
                            info.skin_color !== 'n/a' && (
                                <Tooltip label={'Skin Color - ' + info.skin_color}>
                                    <Button backgroundColor={info.skin_color} width={"4px"} borderRadius={8}/>
                                </Tooltip>
                            )
                        }
                        {/*<StarIcon fill={"transparent"} w={6} height={6} placeSelf={"center"}/>*/}
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}