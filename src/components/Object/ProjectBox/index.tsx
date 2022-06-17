import React from "react";
import { 
    ProjectBoxContainer,
    ProjectImg,


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
            

        </ProjectBoxContainer>
    )
}

export default ProjectBox;
