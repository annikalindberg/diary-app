import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../redux/actions/diaryActions';
import styled from 'styled-components';

export const EntryCard = styled.div`
  background-color: #fff;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8em;
  &:hover {
    background-color: darkred;
  }
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