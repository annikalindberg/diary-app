import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../redux/actions/diaryActions';
import styled from 'styled-components';
const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  font-size: 1em;
  resize: none;
  &:focus {
    outline-color: #0099cc;
    border: 1px solid #0099cc;
  }
  &:hover {
    border: 1px solid #666;
  }
`;

const AddButton = styled.button`
  background-color: #0099cc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #0077a3;
  }
`;
const NewDiaryEntryDialog = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleAddEntry = () => {
        const newEntry = {
            id: Date.now(),
            content,
            date: new Date().toISOString(),
        };
        dispatch(addEntry(newEntry));
        setContent('');
    };

    return (
        <DialogContainer>
            <StyledTextArea
                maxLength="500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                aria-label="Diary entry content"
            />
            <AddButton onClick={handleAddEntry}>Add Entry</AddButton>
        </DialogContainer>
    );
};

export default NewDiaryEntryDialog;
