import React from 'react';
import client from '../../utils/ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import MainRouter from '../Routers/MainRouter/MainRouter';

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
        <MainRouter />
    </ApolloProvider>
  );
}

export default App;