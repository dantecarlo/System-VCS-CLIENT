import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = ApolloClient({
  uri: "http://localhost:8000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

function App() {
	return (
    <ApolloProvider client={client}>
    
    </ApolloProvider>
  );
}

export default App;
