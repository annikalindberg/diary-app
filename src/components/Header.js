// Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
  background-color: ${props => props.theme.colors.lightbackground};
  color: ${props => props.theme.colors.text};
  text-align: center;
  padding: ${props => props.theme.spacing.smallSpace};
  font-size: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
`;

const Header = () => {
    return (
        <HeaderComponent>
            My Awesome Diary
        </HeaderComponent>
    );
};

export default Header;
