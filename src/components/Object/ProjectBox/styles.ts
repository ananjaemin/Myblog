import styled from "styled-components";

type ProjectImgType = {
    Image:string;
};

export const ProjectBoxContainer = styled.a`
    width:250px;
    height:300px;
    margin:20px;
    display:flex;
    flex-direction:column;
    border-radius:4px;
    
    box-shadow: 0 0 4px black;
    transition: all 0.2s ease 0s;

    &:hover{
        transform: translateY(-8px) scale(1.02) translateZ(0px);
    };
`;

export const ProjectImg =styled.div<ProjectImgType>`
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    background-image:${(props) => props.Image};
    background-position:center;
    background-size:cover;
    width:100%;
    height:50%;
`;