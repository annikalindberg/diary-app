import styled from 'styled-components';

export const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.lightbackground};
  color: ${props => props.theme.colors.primarydark};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const SortButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primarydark};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const AddButton = styled(SortButton)``;
