import React from 'react';
/** @jsxImportSource @emotion/react */
import { getUser } from '../../apis/api/user';
import jwt_decode from 'jwt-decode';
import RootContainer from '../../components/Container/RootContainer/RootContainer';

function Home(props) {

    try {
        let decoded = jwt_decode(localStorage.getItem("accessToken").substring(7));
        console.log(decoded);

        const response = getUser(decoded.username);
        console.log(response);
    } catch (error) {
        console.log(error);
    }

    return (
        <RootContainer>


        </RootContainer>
    );
}

export default Home;