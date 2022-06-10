import styled from "styled-components";

type HeaderNavType = {
    leftmargin:string,
    rightmargin:string,
};

export const HeaderNav = styled.nav<HeaderNavType>`
    margin-left:${(props) => props.leftmargin};
    margin-right:${(props) => props.rightmargin};
`;