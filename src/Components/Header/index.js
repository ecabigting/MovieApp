import React from 'react';
// load svg files from image folder
import MovieAppLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// load the styled components
import { Wrapper, Content, AppLogoImg, TMDBLogoImg } from './Header.styles';

// build the component as an arrow function
const Header = () => (
    <Wrapper>
        <Content>
            <AppLogoImg src={MovieAppLogo} alt='MovieAppLogo'/>
            <TMDBLogoImg src={TMDBLogo} alt='The Movie DB Logo'/>
        </Content>
    </Wrapper>
);

//export the component
export default Header;