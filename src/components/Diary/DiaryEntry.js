import React from 'react';
import styled from 'styled-components';

const EntryContainer = styled.div`
  /* Your styling here */
`;

const DiaryEntry = ({ entry, onDelete }) => (
    <EntryContainer>
        <h2>{entry.title}</h2>
        <p>{entry.content}</p>
        <button onClick={() => onDelete(entry.id)}>Delete</button>
    </EntryContainer>
);

export default DiaryEntry;
