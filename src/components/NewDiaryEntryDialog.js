import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../redux/actions/diaryActions';
import { CtaButton } from './reusables/Buttons';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';


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
    outline-color: ${props => props.theme.colors.secondary};
    border: 1px solid #0099cc;
  }
  &:hover {
    border: 1px solid #666;
  }
`;


const NewDiaryEntryDialog = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

  const handleAddEntry = () => { // create new entry object and dispatch addEntry action with new entry as payload
        const newEntry = {
          id: Date.now(), // use current date as id
          content, // use content from state
          date: new Date().toISOString(), // convert date to ISO string
        };
    dispatch(addEntry(newEntry)); // dispatch addEntry action with new entry as payload
    setContent(''); // reset content to empty string
    };

    return (
      <DialogContainer>

        <StyledTextArea


                maxLength="500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write something about your day..."
                aria-label="Diary entry content"
            />
        <CtaButton
          onClick={handleAddEntry}
          disabled={content.length === 0}>
        < FaPlus style={{ marginRight: '9px', marginTop: '5px' }} /> Add Entry
      </CtaButton>
    
        </DialogContainer>
    );
};

export default NewDiaryEntryDialog;
