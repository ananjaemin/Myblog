import React from "react";
import { 
    HomeContainer,
    HomeSection,
    HomeBox,
    HomeContent,

} from "./styles";

import Card from "components/Card";

const Home: React.FC = () =>{
    return(
        <HomeContainer>
            <HomeSection>
                <HomeBox>
                    <HomeContent>

                    </HomeContent>
                    <HomeContent>
                        <Card />
                    </HomeContent>
                </HomeBox>
            </HomeSection>
        </HomeContainer>
    )
};



export default Home;