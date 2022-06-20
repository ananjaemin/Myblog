import React from "react";
import { 
    AboutContent,
    AboutText,
    AboutText2,
    SectionAboutContainer,

} from "./styles";
import AboutHeader from "./AboutHeader";
import AboutFooter from "./AboutFooter";

const SectionAbout: React.FC = () =>{
    return(
        <SectionAboutContainer>
            <AboutHeader/>
            <AboutContent>
                <AboutText>
                    " 도전부터하는 개발자 " <br />
                </AboutText>
                <AboutText2>
                    도전을 성취하기 위해서는 많은 노력이 필요하다. <br/>
                    노력은 최고의 결과를 뒷받침한다.
                </AboutText2>
            </AboutContent>
            <AboutFooter/>
        </SectionAboutContainer>
    )
}

export default SectionAbout;