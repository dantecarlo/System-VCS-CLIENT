import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

function App() {
	return (
    <ApolloProvider client={client}>
      <Header>

      </Header>
    </ApolloProvider>
  );
}

export default App;
