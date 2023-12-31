import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DiaryEntryList from './components/DiaryEntryList';
import NewDiaryEntryDialog from './components/NewDiaryEntryDialog';
import Header from './components/Header';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export const AppContainer = styled.div`
  font-family: var(--text-color);
  background-color: var(--background-color);
  color: var(--text-color);
  padding: ${props => props.theme.spacing.mediumSpace};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <AppContainer>
        <Header />
    <NewDiaryEntryDialog />
      <DiaryEntryList />
      </AppContainer>
    </>
</ThemeProvider >
  </Provider>
);

export default App;
