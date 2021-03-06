import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import {useAuth0} from "@auth0/auth0-react";
import React from "react";

export default function SocialProfileWithImage() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading){
        return <div>
            <h4>Loading ...</h4>
        </div>;
    }

    return (
        isAuthenticated &&(
            <Center py={6}>
                <Box
                    maxW={'270px'}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                        objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                        <Avatar
                            size={'xl'}
                            src={
                                user.picture
                            }
                            alt={user.name}
                            css={{
                                border: '2px solid white',
                                
                            }}
                        />
                    </Flex>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {user.name}
                            </Heading>
                        </Stack>

                        <Stack direction={'row'} justify={'center'} spacing={6}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}>23k</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                    Followers
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}>23k</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                    Followers
                                </Text>
                            </Stack>
                        </Stack>

                        <Button
                            w={'full'}
                            mt={8}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Follow
                        </Button>
                    </Box>
                </Box>
            </Center>

        )

    );
}