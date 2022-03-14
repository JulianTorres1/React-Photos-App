import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from '../pageEsentials/profileCard';
export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading){
        return <div>
            <h4>Loading ...</h4>
        </div>;
    }

    return (
        isAuthenticated && (
            <box>
                <ProfileCard/>
            </box>
        )
    )
}