import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './SigninStyle';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { signin } from '../../apis/api/acoount';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

function Signin(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [isAccountValuesEmpty, setIsAccountValuesEmpty] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
        console.log(Object.values(account).includes(""))
    }, [account])

    const handleSigninSubmit = async () => {
        try {
            const response = await signin(account);
            localStorage.setItem("accessToken", "Bearer " + response.data);
            window.location.reload(); // 새로고침
        } catch (error) {
            setErrorMsg(error.response.data.errorMessage);
            
        }
    }

    return (
        <SignInAndUpLayout>
            <Top>
                <Input placeholder={"전화번호, 사용자이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount}/>
                <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount}/>
                <button css={S.SSigninBtn} disabled={isAccountValuesEmpty} onClick={handleSigninSubmit}>
                    로그인
                </button>                
                <OrBar />

                <button css={S.STextBtn}  >
                    <RiKakaoTalkFill css={S.KakaoImg}/>KaKaO로 로그인
                </button>   
                
                <div>
                    {errorMsg}
                </div>

            </Top>
        </SignInAndUpLayout>
    );
}

export default Signin;