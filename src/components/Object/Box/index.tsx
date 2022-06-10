import React from "react";
import {
    BoxContainer,

} from './styles'

type BoxType = {
    bgcolor:string,
    rotate:string,
    width:string,
    height:string,
    clip:string,
};

const Box: React.FC<BoxType> = ({bgcolor,rotate,width,height,clip}) =>{

    return(
        <BoxContainer 
            backgorund={bgcolor}
            rotate={rotate}
            width={width}
            height={height}
            clip={clip}
        />
    )
}

export default Box;
