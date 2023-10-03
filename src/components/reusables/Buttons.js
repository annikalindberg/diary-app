import styled from 'styled-components';

export const DeleteButton = styled.button`
  background-color: #b0bbfac2;
  color: ${props => props.theme.colors.primarydark};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    background-color: #95dcf9de;
    border: 1px solid ${props => props.theme.colors.primarydark};
  }
  &:focus {
    outline: none;
  }

`;
export const CtaButton = styled.button`
  background-color: ${props => props.theme.colors.cta};
  color: #1a1a23;
  padding: 12px 24px;
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.ctahover}; 
    border: 1px solid ${props => props.theme.colors.primarydark};
  }
`;

export const SortButton = styled.button`
 background-color: ${props => props.isAscending ? props.theme.colors.primaryshade : props.theme.colors.lightbackground};
  color: ${props => props.theme.colors.primarydark};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
    transition: background-color 0.3s ease;

  &:hover {
    ${props => props.isAscending ? props.theme.colors.hover : props.theme.colors.primary};
  color: ${props => props.theme.colors.primarydark};
  border: 1px solid ${props => props.theme.colors.primarydark};
  }
`;

export const AddButton = styled(SortButton)``;
