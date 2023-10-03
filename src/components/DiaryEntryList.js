import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiaryEntry from './DiaryEntry';
import { TOGGLE_SORT } from '../redux/actions/diaryActions';  // Import the toggle action
import { SortButton } from './reusables/Buttons';  
import styled from 'styled-components';
import { FaSort } from 'react-icons/fa';

export const ListContainer = styled.div`
  margin-top: ${props => props.theme.spacing.mediumSpace};
`;




const DiaryEntryList = () => {
    const dispatch = useDispatch();
    const { diaryEntries = [], sortOrder } = useSelector((state) => state.diary || {});

    const sortedDiaryEntries = [...diaryEntries].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
// this returns a number, either positive or negative depending on the sort order (ascending or descending) and the difference between the two dates (dateA - dateB or dateB - dateA) 
        return sortOrder === 'ascending'
            ? dateA - dateB
            : dateB - dateA;
    });
// this function returns a string, either 'Ascending' or 'Descending' depending on the sort order (ascending or descending)
    const getSortButtonText = () => {
        return sortOrder === 'ascending'
            ? 'Ascending'
            : 'Descending';
    }
    return (
        <ListContainer>
            <SortButton
                onClick={() => dispatch({ type: TOGGLE_SORT })}
                isAscending={sortOrder === 'ascending'}  // Pass the prop here
            >
                <FaSort style={{ marginRight:'7px' }} />


                {getSortButtonText()}
            </SortButton>
            {sortedDiaryEntries.map((entry) => (
                <DiaryEntry key={entry.id} entry={entry} />
            ))}
        </ListContainer>
    );
};

export default DiaryEntryList;
