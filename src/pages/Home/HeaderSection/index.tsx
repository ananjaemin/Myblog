import React from "react";
import { 
    HeaderSectionContainer,
    HeaderSectionBox,
    HeaderSectionMyAboutBox,
} from "./styles";

// import SectionAbout from "./About"
import Box from 'components/Object/Box'

type HeaderSectiontype = {


};

const HeaderSection: React.FC<HeaderSectiontype> = () =>{
    return(
        <HeaderSectionContainer>
            <HeaderSectionBox>
                <Box 
                    bgcolor="#005dcc" 
                    rotate="0" 
                    width="10%" 
                    height="80%" 
                    clip={"clip-path: polygon(0 0, 60px 0, 60px 100%, 0 100%);"}
                    minwidth={"auto"}
                    borderradius={"0"}
                    position={"absolute"}
                />
                <HeaderSectionMyAboutBox>
                    {/* <SectionAbout/> */}
                </HeaderSectionMyAboutBox>

            </HeaderSectionBox>


        </HeaderSectionContainer>
    )
}

export default HeaderSection;