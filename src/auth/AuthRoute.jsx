import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthRoute({element}) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [authenticated, setAuthenticated] = useState(false);
                                            // 로그인 판별 true = 로그인 상태, false=비로그인상태

    for (let path of permitAllPath) {
        if (pathname.startsWith(path)) {
            //인증이 되었는지에 관한 검사
            if (authenticated) {
                return <Navigate to={"/"} />
            }
            //인증이 되지 않았다면?
            return element;
        }
    }

    if (!authenticated) {
        return <Navigate to={"/accounts/login"} />
    }
    return element;
    
}

export default AuthRoute;