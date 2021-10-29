import React from "react";
import { Wrapper, Content } from "./Footer.styles";
import GithubIcon from "../../images/githubicon.svg"

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <a href="https://github.com/ecabigting" target="_blank" rel="noreferrer">
                    <img src={GithubIcon} alt="repo"/>
                </a>
            </Content>
        </Wrapper>
    );
};

export default Footer;