import React from "react";
import { 
    HeaderSectionContainer,
    HeaderSectionBox,
    HeaderSectionMyAboutBox,
    HeaderSectionLight,
    MyImg,


} from "./styles";

import SectionAbout from "./About"


type HeaderSectiontype = {


};

const HeaderSection: React.FC<HeaderSectiontype> = () =>{
    return(
        <HeaderSectionContainer>
            <HeaderSectionBox>
                <HeaderSectionMyAboutBox>
                    <SectionAbout/>
                </HeaderSectionMyAboutBox>
                <HeaderSectionLight>
                    <MyImg />             
                </HeaderSectionLight>
            </HeaderSectionBox>
        </HeaderSectionContainer>
    )
}

export default HeaderSection;