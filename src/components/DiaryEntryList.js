import React from 'react';
import { useSelector } from 'react-redux';
import DiaryEntry from './DiaryEntry';

const DiaryEntryList = () => {
    const diaryEntries = useSelector((state) => state.diary.diaryEntries);

    // Check if diaryEntries exists and is an array
    if (!Array.isArray(diaryEntries)) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {diaryEntries.map((entry) => (
                <DiaryEntry key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default DiaryEntryList;
