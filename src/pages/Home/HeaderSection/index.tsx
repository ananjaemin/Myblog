import React from "react";
import { 
    HeaderSectionContainer,
    HeaderSectionBox,
    HeaderSectionMyAboutBox,
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

            </HeaderSectionBox>
        </HeaderSectionContainer>
    )
}

export default HeaderSection;