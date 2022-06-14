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
    minwidth:string,
    borderradius:string,
};

const Box: React.FC<BoxType> = ({bgcolor,rotate,width,height,clip,minwidth,borderradius}) =>{

    return(
        <BoxContainer 
            backgorund={bgcolor}
            rotate={rotate}
            width={width}
            height={height}
            clip={clip}
            minwidth={minwidth}
            borderradius={borderradius}
        />
    )
}

export default Box;
