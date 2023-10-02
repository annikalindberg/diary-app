import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  /* Your styling here */
`;

const NewPostModal = ({ entry, onClose }) => {
    return (
        <ModalContainer>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <button onClick={onClose}>Close</button>
        </ModalContainer>
    );
};

export default NewPostModal;
