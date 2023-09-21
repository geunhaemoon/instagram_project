
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FiInstagram, FiSearch } from 'react-icons/fi'
import { LuPlusSquare } from 'react-icons/lu'
import { GoHomeFill, GoHome } from 'react-icons/go'
import NavItem from './NavItem/NavItem';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



function Sidebar(props) {
    const navigate = useNavigate();

    const [isSelectedList, setIsSelectedList] = useState([true, false, false, false]);


    const handleHomeClick = () => {
        setIsSelectedList([true, false, false, false])
        
    }
    const handleSearchClick = () => {
        setIsSelectedList([false, true, false, false])
        
    }
    const handleAddContentClick = () => {
        setIsSelectedList([false, false, true, false])
        
    }
    const handleProfileClick = () => {
        setIsSelectedList([false, false, false, true])
        
    }    
    

    return (
        <div css={S.SLayout}>
            <NavItem onclick={handleHomeClick} > <FiInstagram /> </NavItem>

            <NavItem
                onclick={handleSearchClick}>{isSelectedList[0] ? <GoHomeFill /> : <GoHome />}
            </NavItem>

            <NavItem onclick={handleAddContentClick}>   <FiSearch /> </NavItem>

            <NavItem onclick={handleProfileClick}> <LuPlusSquare />  </NavItem>

            <NavItem onclick={handleHomeClick} > <FiInstagram /> </NavItem>

        </div>
    );
}

export default Sidebar;

