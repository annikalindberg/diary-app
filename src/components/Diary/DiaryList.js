import React from 'react';
import DiaryEntry from './DiaryEntry';

const DiaryEntriesList = ({ entries, onDelete }) => (
    <div>
        {entries.slice(0, 5).map(entry => (
            <DiaryEntry key={entry.id} entry={entry} onDelete={onDelete} />
        ))}
    </div>
);

export default DiaryEntriesList;
