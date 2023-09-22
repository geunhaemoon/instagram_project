import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./TopStyle";
import logoimg from '../../../../assets/logoimg.png'
    

function Top({children}) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLogoBox}>
                <img css={S.SLogImg} src={logoimg} alt="" />
            </div>  

            {children}

        </div>
    );
}

export default Top;