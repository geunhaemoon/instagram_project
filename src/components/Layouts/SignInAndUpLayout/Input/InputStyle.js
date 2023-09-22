import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    margin: 3px 40px;
    width: 268px;
    height: 38px;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;

`;

export const SInput = (isEmpty) => css`
    cursor: text;
    position: relative;
    flex-grow: 1;
    padding: ${isEmpty ? "9px 0px 7px 8px" : "14px 0px 2px 8px"};
    transition: all 0.5s ease;

    & > input {
        border: none;
        outline: none;
        height: 20px;
        background-color: transparent;
        margin: 2px;
    }

    & > span {
        transform: translateY(-50%);
        position: absolute;
        top: ${isEmpty ? "50%" : "25%"};
        left: 8px;
        color: #555;
        font-size: ${isEmpty ? "12px" : "10px"};
        transition: all 0.5s ease;


    }
`;

export const SStateBox = css`
    padding-right: 0px 8px;
`;


