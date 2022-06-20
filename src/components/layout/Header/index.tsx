import React from "react";
import { 
    HeaderContainer,
    HeaderPositionBox,
} from "./styles";
import HeaderTitle from "./Title";
import HeaderNavbar from "./Navbar";
// import HeaderProfile from "./Profile";

const Header: React.FC = () =>{
    return(
        <>    
            <HeaderContainer height={"3.5rem"}>
                <HeaderPositionBox width={"92%"} justify={"space-between"}>
                    <HeaderTitle Text={"Critical"} width={"auto"}/> {/* 수정 */}
                    <HeaderPositionBox width={"auto"} justify={"space-between"}> {/* Profile 추가예정 */}
                        <HeaderNavbar />
                        {/* <HeaderProfile/> */}
                    </HeaderPositionBox>
                </HeaderPositionBox>
            </HeaderContainer>
        </>
    )
}

export default Header;