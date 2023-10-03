import { ADD_ENTRY, DELETE_ENTRY, TOGGLE_SORT } from '../actions/diaryActions';

const initialState = {
    diaryEntries: [
            {
                "id": 1,
                "title": "A Great Start to the Month",
                "content": "Today was a good day!",
                "date": "2023-10-02"
            },
            {
                "id": 2,
                "title": "Beautiful Weather Today",
                "content": "Weather was nice.",
                "date": "2023-10-03"
            },
            {
                "id": 3,
                "title": "Refreshing Nature Walk",
                "content": "Went for a long walk.",
                "date": "2023-10-04"
            },
            {
                "id": 4,
                "title": "Delicious Homemade Dinner",
                "content": "Cooked spaghetti carbonara for dinner. It was delicious!",
                "date": "2023-10-05"
            },
            {
                "id": 5,
                "title": "Caught Up With Old Friends",
                "content": "Had a Zoom call with college friends. Felt great to catch up!",
                "date": "2023-10-06"
            }
        ],
    sortOrder: 'ascending',
};
  

export const diaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return { ...state, diaryEntries: [...state.diaryEntries, action.payload] };
        case DELETE_ENTRY:
            return { ...state, diaryEntries: state.diaryEntries.filter((entry) => entry.id !== action.payload) };
        case TOGGLE_SORT:
            return { ...state, sortOrder: state.sortOrder === 'ascending' ? 'descending' : 'ascending' };
        default:
            return state;
    }
};
