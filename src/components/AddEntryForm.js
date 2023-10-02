import React, { useState } from 'react';

const AddEntryForm = ({ onSubmit }) => { // onadd is a prop that is passed in from the parent component (App.js)
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit({ text: inputValue, id: new Date().toISOString() });
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Write your entry here..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
};

export default AddEntryForm;
