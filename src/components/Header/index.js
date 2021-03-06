import React from "react";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBlogo from '../../images/tmdb_logo.svg'; 

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header = () => (
   <Wrapper>
       <Content>
           <LogoImg src= {RMDBLogo} alt= 'rmdb-logo'/>
           <TMDBLogoImg src= {TMDBlogo} alt= 'tmdb-logo'/>
       </Content>
   </Wrapper> 
);


export default Header;