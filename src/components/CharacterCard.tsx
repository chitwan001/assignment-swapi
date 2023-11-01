import {Character} from "../types/Character.tsx";
import userImage from '../assets/sampleuser.avif';
import {Button, Image, Text, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack} from "@chakra-ui/react";

export default function CharacterCard({info}: { info: Character}) {
    return (
        <Card>
            <CardBody>
                <Image
                    src={userImage}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{info.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}