// Header.js

import React from 'react';
import styled from 'styled-components';
import { FcAcceptDatabase } from "react-icons/fc";
import { Padding } from '@mui/icons-material';

const HeaderComponent = styled.header`
  background-color: ${props => props.theme.colors.lightbackground};
  color: ${props => props.theme.colors.text};
  text-align: center;
  padding: ${props => props.theme.spacing.largeSpace};
  font-size: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
`;
const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0 50px 16px 0;
    `
    ;



const Header = () => {
    return (
        <HeaderComponent>
            <IconWrapper>
                <FcAcceptDatabase size={42}
                />
            </IconWrapper>

            My Coding Diary
        </HeaderComponent>
    );
};

export default Header;
