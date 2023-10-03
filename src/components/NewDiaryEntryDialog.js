import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../redux/actions/diaryActions';

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
        <div>
            <textarea maxLength="500" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleAddEntry}>Add Entry</button>
        </div>
    );
};

export default NewDiaryEntryDialog;
