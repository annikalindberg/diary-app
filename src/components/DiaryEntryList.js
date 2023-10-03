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
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(1);
    const { diaryEntries = [], sortOrder } = useSelector((state) => state.diary || {});
    const itemsPerPage = 5;
    const totalPages = Math.ceil(diaryEntries.length / itemsPerPage);

    const sortedDiaryEntries = [...diaryEntries].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const entriesToDisplay = sortedDiaryEntries.slice(startIndex, endIndex);

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

            {entriesToDisplay.map((entry) => (
                <DiaryEntry key={entry.id} entry={entry} />
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
