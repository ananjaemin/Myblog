import React from "react";
import { 
    HeaderContainer,
    HeaderPositionBox,
    Container,
} from "./styles";
import HeaderTitle from "./Title";
import HeaderNavbar from "./Navbar";
import HeaderSection from "./Section";
// import HeaderProfile from "./Profile";

const Header: React.FC = () =>{
    return(
        <Container>    
            <HeaderContainer height={"3.5rem"}>
                <HeaderPositionBox width={"95%"} justify={"space-between"}>
                    <HeaderTitle Text={"Critical"} width={"auto"}/> {/* 수정 */}
                    <HeaderPositionBox width={"auto"} justify={"space-between"}> {/* Profile 추가예정 */}
                        <HeaderNavbar />
                        {/* <HeaderProfile/> */}
                    </HeaderPositionBox>
                </HeaderPositionBox>
            </HeaderContainer>
            <HeaderSection/>
        </Container>
    )
}

export default Header;