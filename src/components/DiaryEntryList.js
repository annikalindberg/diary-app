import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiaryEntry from './DiaryEntry';
import { toggleSort } from '../redux/actions/diaryActions';  // Import the toggle action

const DiaryEntryList = () => {
    const dispatch = useDispatch();
    const { diaryEntries = [], sortOrder } = useSelector((state) => state.diary || {});

    const sortedEntries = [...diaryEntries].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return sortOrder === 'ascending'
            ? dateA - dateB
            : dateB - dateA;
    });

    const getSortOrderText = () => {
        return sortOrder === 'ascending'
            ? 'Ascending'
            : 'Descending';
    }

    return (
        <div>
            {/* Add a toggle button */}
            <button onClick={() => dispatch(toggleSort())}>
               {getSortOrderText()} (Current: {sortOrder})
            </button>

            {sortedEntries.map((entry) => (
                <DiaryEntry key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default DiaryEntryList;
