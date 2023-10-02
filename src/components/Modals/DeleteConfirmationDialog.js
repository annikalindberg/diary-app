import React from 'react';

const DeleteConfirmationDialog = ({ onDelete }) => {
    return (
        <div>
            <p>Are you sure you want to delete this entry?</p>
            <button onClick={onDelete}>Yes</button>
            <button>No</button>
        </div>
    );
};

export default DeleteConfirmationDialog;
