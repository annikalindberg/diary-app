import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../redux/actions/diaryActions';

const DiaryEntry = ({ entry }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEntry(entry.id));
  };

  return (
    <div>
      <p>{entry.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DiaryEntry;