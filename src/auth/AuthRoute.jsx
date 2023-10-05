import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Signin from '../pages/Signin/Signin';
import { useQuery } from 'react-query';
import { authenticate } from '../apis/api/acoount';
import Loading from '../components/Loading/Loading';


function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];

                                            // [키값], 비동기처리, {객체(옵션...)} 
    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 0, // 요청실패시 몇번정도 다시 요청보낼지 , 회원가입은 한번 아니면 아닌거라 그냥 0
        refetchOnWindowFocus: false
    });

    if (authenticateState.isLoading) {
        // console.log("로딩중"); //점 찍을수 있는건 객체다
        return <Loading />;
    }

    if (authenticateState.isError) {
        for (let path of permitAllPath) {
            if (pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"} />;
    } 
    
    for (let path of permitAllPath) {
        if (pathname.startsWith(path)) {
            return <Navigate to={"/"} />;
        }   
    }

    return element;

    // console.log("로딩끝남");
    // return <>로딩끝남</>
    
}

export default AuthRoute;