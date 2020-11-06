// Write your Character component here
import React from "react";
import styled from "styled-components";
import { Card, CardTitle } from "reactstrap"

export default function Character(props) {
    const { info } = props;
    return(
        <StyledCard>
            <Card>
                <CardTitle>{info.name}</CardTitle>
                <div>
                 <p>{`Date of Birth: ${info.birth_year}
                 eye color: ${info.eye_color}\n
                 gender: ${info.gender}\n
                 hair color: ${info.hair_color}\n
                 height: ${info.height}\n
                 homeworld: ${info.homeworld}\n
                 mass: ${info.mass}\n
                 skin color: ${info.fair}`}</p>
                </div>
            </Card>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background: black;
    

`