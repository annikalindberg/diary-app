export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const TOGGLE_SORT = 'TOGGLE_SORT';

export const addEntry = (entry) => ({
    type: ADD_ENTRY,
    payload: entry,
});

export const deleteEntry = (id) => ({
    type: DELETE_ENTRY,
    payload: id,
});

export const toggleSort = () => ({
    type: TOGGLE_SORT,
});
