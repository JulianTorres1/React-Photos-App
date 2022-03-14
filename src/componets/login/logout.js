import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@chakra-ui/react";

export const LogoutButton = () => {

    const { logout } = useAuth0();

    return <Button
        onClick={() => logout({ returnTo: window.location.origin })}
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'link'}
        href={'#'}>
        Logout
    </Button>

}