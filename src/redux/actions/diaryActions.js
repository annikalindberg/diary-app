import * as mockApi from '../../MockData/mockApi';
// to be replaced with a different API utility file that makes real HTTP requests

export const fetchEntries = () => async (dispatch) => {
    const entries = await mockApi.fetchEntries();
    dispatch({ type: 'FETCH_ENTRIES', payload: entries });
};

export const addEntry = (entry) => async (dispatch) => {
    const newEntry = await mockApi.addEntry(entry);
    dispatch({ type: 'ADD_ENTRY', payload: newEntry });
};

export const deleteEntry = (id) => async (dispatch) => {
    await mockApi.deleteEntry(id);
    dispatch({ type: 'DELETE_ENTRY', payload: id });
};
