import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiaryEntry from './DiaryEntry';
import { TOGGLE_SORT } from '../redux/actions/diaryActions';
import { FaSort } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: 20px;
`;

const DiaryEntryList = () => {
    const dispatch = useDispatch(); // dispatch action to toggle sort order
    const [currentPage, setCurrentPage] = React.useState(1); // set current page to 1
    const { diaryEntries = [], sortOrder } = useSelector((state) => state.diary || {}); // if state.diary is undefined, set diaryEntries to empty array to avoid error when sorting 
    const itemsPerPage = 5;
    const totalPages = Math.ceil(diaryEntries.length / itemsPerPage); // calculate total pages based on number of diary entries and items per page

    const sortedDiaryEntries = [...diaryEntries].sort((a, b) => { // sort diary entries by date
        const dateA = new Date(a.date); // convert date string to Date object
        const dateB = new Date(b.date);  // convert date string to Date object 
        return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA; // if sortOrder is ascending, sort by dateA - dateB, else sort by dateB - dateA 
    });

    const startIndex = (currentPage - 1) * itemsPerPage; // calculate start index based on current page and items per page 
    const endIndex = startIndex + itemsPerPage; // calculate end index based on start index and items per page
    const entriesToDisplay = sortedDiaryEntries.slice(startIndex, endIndex); // slice diary entries based on start and end index

    return (
        <ListContainer>
            <Button
                variant="contained"
                color={sortOrder === 'ascending' ? 'primary' : 'secondary'} 
                onClick={() => dispatch({ type: TOGGLE_SORT })}
            >
                <FaSort style={{ marginRight: '8px' }} />
                {sortOrder === 'ascending' ? 'Ascending' : 'Descending'}
            </Button>

            {entriesToDisplay.map((entry) => ( // map over entriesToDisplay array and render DiaryEntry component for each entry 
                <DiaryEntry key={entry.id} entry={entry} /> // pass entry as prop to DiaryEntry component
            ))}

            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, newPage) => setCurrentPage(newPage)}
            />
        </ListContainer>
    );
};

export default DiaryEntryList;
