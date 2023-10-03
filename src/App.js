import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DiaryEntryList from './components/DiaryEntryList';
import NewDiaryEntryDialog from './components/NewDiaryEntryDialog';


const App = () => (
  <Provider store={store}>
    <NewDiaryEntryDialog />
    <DiaryEntryList />
  </Provider>
);

export default App;
