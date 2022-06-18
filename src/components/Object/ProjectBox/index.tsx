import React from "react";
import { 
    ProjectBoxContainer,
    ProjectImg,
    ProjectBoxMainBody,
    ProjectBoxMainHeader,
    ProjectTitle,
    Projectcategory,
    ProjectcategoryBox,
    ProjectAbout,
    ProjectPositionBox,
    ProjectDays,

} from "./styles";

type ProjectBoxType = {
    title:string;
    about:string;
    days:string;
    category:string;
    img:string;
    Link:string;
};


const ProjectBox: React.FC<ProjectBoxType> = ({title,about,days,category,img,Link}) =>{
    return(
        <ProjectBoxContainer href={Link}>
           <ProjectImg Image={"url("+process.env.PUBLIC_URL+img+")"} />
            <ProjectBoxMainBody>
                <ProjectPositionBox>
                    <ProjectBoxMainHeader>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectcategoryBox>
                            <Projectcategory>
                                {category}
                            </Projectcategory>
                        </ProjectcategoryBox>
                    </ProjectBoxMainHeader>
                    <ProjectAbout>{about}</ProjectAbout>
                </ProjectPositionBox>
                <ProjectDays>{days}</ProjectDays>
            </ProjectBoxMainBody>            
        </ProjectBoxContainer>
    )
}

export default ProjectBox;
