import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './ModalHeaderStyle';

function ModalHeader({title, leftBtn, rightBtn}) {

    return (
        <div css={S.SLayout}>
            {leftBtn}
            <h1>{title}</h1>
            {rightBtn}
        </div>
    );
}

export default ModalHeader;