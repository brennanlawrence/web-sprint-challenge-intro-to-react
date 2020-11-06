import React from "react";
import styled from "styled-components";

export default function Title(props) {
    return (
        <StyledTitle>
            <h1>Star Wars Characters</h1>
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
    color: black;
    text-shadow: black 2px;

`