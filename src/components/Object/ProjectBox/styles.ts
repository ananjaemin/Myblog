import styled from "styled-components";

type ProjectImgType = {
    Image:string;
};

export const ProjectBoxContainer = styled.a`
    text-decoration: none;
    width:280px;
    min-width:280px;
    height:320px;
    min-height:320px;
    margin:20px;
    display:flex;
    align-items:center;
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

export const ProjectBoxMainBody = styled.div`
    display:flex;
    width:85%;
    flex-grow:1;
    margin-top:10px;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`;

export const ProjectBoxMainHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    margin-bottom:3px;
`;

export const ProjectPositionBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ProjectTitle = styled.div`
    color:var(--color__text2);
    font-size:1.5em;
    font-weight:bold;

`;

export const Projectcategory = styled.div`
    color:var(--color__text);
    background:rgba(0,0,0,0.5);
    font-size:0.8em;
    border-radius:0.3em;
    padding-left:3px;
    padding-right:3px;
`;

export const ProjectcategoryBox = styled.div`
    display:flex;
    align-items:center;
`;


export const ProjectAbout = styled.div`
    word-break:break-all;
    color:var(--color__text3);
    width:90%;
`;

export const ProjectDays = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    margin-bottom:10px;
    color:var(--color__text3);
    font-size:0.9em;
`;