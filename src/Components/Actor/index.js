import React from "react";
import PropTypes from 'prop-types'
// styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt={name}/>
        <h3>{name}</h3>
        <p>as {character}</p>
    </Wrapper>

)

Actor.propTypes = {
    name : PropTypes.string,
    character : PropTypes.string,
    imageUrl : PropTypes.string
}

export default Actor;