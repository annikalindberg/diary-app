import { ADD_ENTRY, DELETE_ENTRY, TOGGLE_SORT } from '../actions/diaryActions';

const initialState = {
    diaryEntries:
        [
            {
                "id": 1,
                "title": "Cracked LeetCode Problem",
                "content": "Solved a hard level dynamic programming problem on LeetCode!",
                "date": "2023-10-02"
            },
            {
                "id": 2,
                "title": "GitHub Contributions Streak",
                "content": "Maintained a 30-day GitHub contributions streak. Feeling productive!",
                "date": "2023-10-03"
            },
            {
                "id": 3,
                "title": "Dive Into React Hooks",
                "content": "Spent the day exploring React hooks. useContext is a game changer!",
                "date": "2023-10-04"
            },
            {
                "id": 4,
                "title": "DevOps Pipeline Success",
                "content": "Managed to set up a CI/CD pipeline with GitHub Actions. Everything's automated now!",
                "date": "2023-10-05"
            },
            {
                "id": 5,
                "title": "VS Code Extension Discovery",
                "content": "Found a super useful VS Code extension for code formatting. It's a lifesaver!",
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
