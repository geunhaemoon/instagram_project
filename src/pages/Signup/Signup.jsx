import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
/** @jsxImportSource @emotion/react */
import * as S from "./SingupStyle"
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/acoount';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneOrEmail: "",
        name: "",
        username: "",
        password: ""
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
    }, [account])

    const handleSignupSubmit = async () => {
        try {
            const response = await signup(account);
            navigate("/accounts/login");
        } catch (error) {
            const responseErrorMSg = error.response.data;
            const keys = Object.keys(responseErrorMSg);

            if (keys.includes("username")) {
                setErrorMsg(responseErrorMSg.username);
            }else if (keys.includes("phoneOrEmail")) {
                setErrorMsg(responseErrorMSg.phoneOrEmail);
            }else if (keys.includes("name")) {
                setErrorMsg(responseErrorMSg.name);
            }else if (keys.includes("password")) {
                setErrorMsg(responseErrorMSg.password);
            }
        }
    }

    return (
        <SignInAndUpLayout>
            <Top>

                <div css={S.SInfo}>
                    친구들의 사진과 동영상을 보려면 가입하세요.
                </div>
                <button css={S.SBtn}>
                    <RiKakaoTalkFill css={S.KakaoImg}  />KaKaO로 로그인
                </button>
                <OrBar />
                <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneOrEmail"} changeAccount={changeAccount}/>
                <Input placeholder={"성명"} name={"name"} changeAccount={changeAccount}/>
                <Input placeholder={"사용자 이름"} name={"username"} changeAccount={changeAccount}/>
                <Input placeholder={"비밀번호"} name={"password"} type={"password"} changeAccount={changeAccount} />
                <button css={S.SBtn} disabled={isAccountValuesEmpty} onClick={handleSignupSubmit}>
                    가입
                </button>
                <div>
                    {errorMsg}
                </div>
                            
            </Top>

        </SignInAndUpLayout>
    );
}

export default Signup;