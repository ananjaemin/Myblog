import React from "react";
import { 
    HeaderContainer,
    HeaderPositionBox,

} from "./styles";
import HeaderTitle from "./Title";

const Header: React.FC = () =>{
    return(
        <HeaderContainer height={"3.5rem"}>
            <HeaderPositionBox width={"95%"}>
                <HeaderTitle Text={"Critical"} width={"170px"}/> {/* 수정 */}
            </HeaderPositionBox>
        </HeaderContainer>
    )
}

export default Header;