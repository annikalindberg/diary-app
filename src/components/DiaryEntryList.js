import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiaryEntry from './DiaryEntry';
import { TOGGLE_SORT } from '../redux/actions/diaryActions';  // Import the toggle action
import { SortButton } from './reusables/Buttons';  
import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: ${props => props.theme.spacing.mediumSpace};
`;




const DiaryEntryList = () => {
    const dispatch = useDispatch();
    const { diaryEntries = [], sortOrder } = useSelector((state) => state.diary || {});

    const sortedDiaryEntries = [...diaryEntries].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return sortOrder === 'ascending'
            ? dateA - dateB
            : dateB - dateA;
    });

    const getSortButtonText = () => {
        return sortOrder === 'ascending'
            ? 'Ascending'
            : 'Descending';
    }
    return (
        <ListContainer>
            <SortButton onClick={() => dispatch({ type: TOGGLE_SORT })}>
                {getSortButtonText()}
            </SortButton>
            {sortedDiaryEntries.map((entry) => (
                <DiaryEntry key={entry.id} entry={entry} />
            ))}
        </ListContainer>
    );
};

export default DiaryEntryList;
