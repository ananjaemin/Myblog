import React from "react";
import styled from "styled-components";
import profile from 'img/profile.png'

const HeaderProfile: React.FC = () =>{
    return(
        <ProfileContainer>
            <Profile/>
        </ProfileContainer>
    )
};

const ProfileContainer = styled.div`
    height:100%;
    display:flex;
    align-items:center;
`

const Profile = styled.img.attrs({
    src:profile
})`
    width:35px;
    border-radius:100%;
    border:1.5px solid #f5f5f5;


`;

export default HeaderProfile;