// This is the main component of the app. It is responsible for rendering the main view and the dialog to add a new diary entry.
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries, addEntry, deleteEntry } from './redux/actions/diaryActions';
import styled from 'styled-components';
import AddEntryForm from './components/AddEntryForm';

const AppContainer = styled.div`
  /* Add your styling here */
`;

function App() {
  const dispatch = useDispatch();
  const entries = useSelector(state => state.diary.entries);

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  const handleAddEntry = (newEntry) => {
    dispatch(addEntry(newEntry));
  };

  const handleDeleteEntry = (id) => {
    dispatch(deleteEntry(id));
  };

  return (
    <AppContainer>
      <h1>Diary App</h1>
      <AddEntryForm onSubmit={handleAddEntry} />
      {/* Main view where all previous diary entries are shown */}
      <div>
        {entries.slice(0, 5).map(entry => (
          <div key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <button onClick={() => handleDeleteEntry(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
      {/* Dialog to post a new diary entry */}
      <div>
        <button onClick={() => handleAddEntry({ text: 'New entry', id: new Date().toISOString() })}>
          Add Entry
        </button>
      </div>
    </AppContainer>
  );
}

export default App;
