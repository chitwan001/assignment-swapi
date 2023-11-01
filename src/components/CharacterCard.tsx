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

export default function CharacterCard({info}: { info: Character }) {
    const navigator = useNavigate()
    return (
        <Card cursor={"pointer"} onClick={() => {
            navigator({pathname:'people/1'})
        }}>
            <CardBody>
                <Image
                    src={userImage}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{info.name}</Heading>
                    <Text color='blue.600' fontSize='md'>
                        {info.birth_year}
                        {
                            info.gender !== 'n/a' && (
                                <>, {info.gender.toLocaleUpperCase()}</>
                            )
                        }
                    </Text>
                    <HStack>
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
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}