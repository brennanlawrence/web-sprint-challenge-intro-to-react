import React from "react";
import styled from "styled-components";
import Character from "./Character";

export default function Container(props) {
    const { data } = props;

    return(
        <StyledContainer>
            {
            data.map((item, index )=> {
                return <Character key={index} info={item}/>
                })
            }
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    color: red; 
`