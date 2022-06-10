import React from "react";
import { 
    HeaderContainer,
    HeaderPositionBox,
} from "./styles";
import HeaderTitle from "./Title";
import HeaderNavbar from "./Navbar";
import HeaderProfile from "./Profile";

const Header: React.FC = () =>{
    return(
        <HeaderContainer height={"3.5rem"}>
            <HeaderPositionBox leftrightmargin={"38px"} width={"100%"}>
                <HeaderTitle Text={"Critical"} width={"170px"}/> {/* 수정 */}
                <HeaderPositionBox leftrightmargin={"0px"} width={"13%"}>
                    <HeaderNavbar />
                    <HeaderProfile/>
                </HeaderPositionBox>
            </HeaderPositionBox>
        </HeaderContainer>
    )
}

export default Header;