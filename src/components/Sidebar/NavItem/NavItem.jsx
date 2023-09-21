import React, { useState } from 'react';
import * as S from "./Style";
/** @jsxImportSource @emotion/react */


function NavItem({ onclick, children }) {


    return (
        <div css={S.SLayout} onClick={onclick}>
            {children}
        </div>
    );
}

export default NavItem;