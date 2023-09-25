import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './SigninStyle';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { RiKakaoTalkFill } from 'react-icons/ri';

function Signin(props) {

    const emptyAccount = {
        phoneAndEmailAndUsername: "",
        loginpassword: ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])

    return (
        <SignInAndUpLayout>
            <Top>
                <Input placeholder={"전화번호, 사용자이름 또는 이메일"} name={"phoneAndEmailAndUsername"} changeAccount={changeAccount}/>
                <Input placeholder={"비밀번호"} type={"password"} name={"loginpassword"} changeAccount={changeAccount}/>
                <button css={S.SSigninBtn} disabled={isAccountValuesEmpty} >
                    로그인
                </button>                
                <OrBar />
                <button css={S.STextBtn}>
                    <RiKakaoTalkFill css={S.KakaoImg} />KaKaO로 로그인
                </button>                

            </Top>
        </SignInAndUpLayout>
    );
}

export default Signin;