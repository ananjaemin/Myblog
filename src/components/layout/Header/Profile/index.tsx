import React from "react";
import styled from "styled-components";
import profile from 'img/profile.png'

const HeaderProfile: React.FC = () =>{
    return(
        <Profile />
    )
};

const Profile = styled.img.attrs({
    src:profile
})`
    
    width:35px;
    height:35px;
    border-radius:100%;
    border:1.5px solid #f5f5f5;
`;

export default HeaderProfile;