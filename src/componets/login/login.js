import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@chakra-ui/react";

// <button onClick={() => loginWithRedirect()} > Login </button>

export const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return <Button
        onClick={() => loginWithRedirect()}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
        _hover={{
            bg: 'pink.300',
        }}>
        Login
    </Button>


}