import { css } from "@emotion/react";

export const SInfo = css`
    font-size: 14px;
    margin: 5px 0px;
`;


export const SBtn = css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 280px;
    height: 35px;
    margin: 10px 0px;
    background-color: #FADC52;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    color: #fff;
    &:disabled{
        background-color:#FFC45F;
        cursor: auto;
    }
`;

export const KakaoImg = css`
    font-size: 23px;
    margin: 0px 2px;
`;

