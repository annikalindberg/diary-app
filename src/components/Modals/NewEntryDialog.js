import React, { useState } from 'react';

const NewEntryDialog = () => {
    const [content, setContent] = useState('');

    return (
        <div>
            <textarea
                maxLength="500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button>Submit</button>
        </div>
    );
};

export default NewEntryDialog;
