import React from "react";
import ProjectBox from "components/Object/ProjectBox";

import { ProjectContainer } from "./styles";


const Project: React.FC = () =>{

    return(
        <ProjectContainer>
            <ProjectBox
                title="Test"
                about="Test 페이지입니다."
                days="2022-06-18"
                category="#test"
                img="/ProjectImg/img.png"
                Link="pages/write/test/test"
            />
            <ProjectBox
                title=""
                about=""
                days=""
                category=""
                img="/ProjectImg/img.png"
                Link=""
            />
            <ProjectBox
                title=""
                about=""
                days=""
                category=""
                img="/ProjectImg/img.png"
                Link=""
            />
            <ProjectBox
                title=""
                about=""
                days=""
                category=""
                img="/ProjectImg/img.png"
                Link=""
            />
            <ProjectBox
                title=""
                about=""
                days=""
                category=""
                img="/ProjectImg/img.png"
                Link=""
            />

        
        </ProjectContainer>
    )
}

export default Project;