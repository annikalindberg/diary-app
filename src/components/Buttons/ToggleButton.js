import React from 'react';

const ToggleButton = ({ isAscending, onToggle }) => {
    return (
        <button onClick={onToggle}>
            {isAscending ? 'Sort Ascending' : 'Sort Descending'}
        </button>
    );
};

export default ToggleButton;
