import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './ModalBodyStyle';

function ModalBody({children}) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default ModalBody;