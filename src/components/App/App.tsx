import React from 'react';
import client from '../../utils/ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '../Routers/MainRouter/MainRouter';

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;