import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
/** @jsxImportSource @emotion/react */
import * as S from "./SingupStyle"
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/acoount';
import { RiKakaoTalkFill } from 'react-icons/ri';

function Signup() {
    
    const emptyAccount = {
        phoneAndEmail: "",
        name: "",
        username: "",
        password:""
    }
    const [account, setAccount] = useState(emptyAccount);
    const [isAccountValuesEmpty, setIsAccountValuesEmpty] = useState(true);

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    },[account])

    const handleSignupSubmit = () => {
        signup(account);
    }

    return (
        <SignInAndUpLayout>
            <Top>

                    <div css={S.SInfo}>
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </div>
                    <button css={S.SBtn}>
                        <RiKakaoTalkFill />KaKaO로 로그인
                    </button>
                    <OrBar />
                    <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneAndEmail"} changeAccount={changeAccount}/>
                    <Input placeholder={"성명"} name={"name"} changeAccount={changeAccount}/>
                    <Input placeholder={"사용자 이름"} name={"username"} changeAccount={changeAccount}/>
                    <Input placeholder={"비밀번호"} name={"password"} type={"password"} changeAccount={changeAccount} />
                    <button css={S.SBtn} disabled={isAccountValuesEmpty} onClick={handleSignupSubmit}>가입</button>
                    
            </Top>

        </SignInAndUpLayout>
    );
}

export default Signup;