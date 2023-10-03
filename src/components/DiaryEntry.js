import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../redux/actions/diaryActions';
import { DeleteButton } from '../components/reusables/Buttons';
import styled from 'styled-components';

export const EntryCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: var(--text-color);
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const DiaryEntry = ({ entry }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(entry.id));
  };

  return (
    <EntryCard>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </EntryCard>
  );
};

export default DiaryEntry;