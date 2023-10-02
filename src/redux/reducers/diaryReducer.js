// src/reducers/diaryReducer.js

const initialState = {
    entries: [],
};

export default function diaryReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ENTRIES':
            return { ...state, entries: action.payload };
        case 'ADD_ENTRY':
            return { ...state, entries: [...state.entries, action.payload] };
        case 'DELETE_ENTRY':
            return { ...state, entries: state.entries.filter(entry => entry.id !== action.payload) };
        default:
            return state;
    }
}
