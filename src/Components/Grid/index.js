import React from "react";
//styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
    // children is a default react prop
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;