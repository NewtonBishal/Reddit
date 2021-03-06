import { withApollo as createWithApollo } from 'next-apollo';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include' as const,
});

export const withApollo = createWithApollo(client);
