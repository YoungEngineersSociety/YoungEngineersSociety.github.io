import { IntrospectionFragmentMatcher, InMemoryCache, HttpLink } from 'apollo-boost';
import ApolloClient from 'apollo-client'
import introspectionQueryResultData from '../hooks/Apollo/fragmentTypes';
import { setContext } from 'apollo-link-context'

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });
const httpLink = new HttpLink({ uri: 'https://graphql.datocms.com/' })
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: '963fab994705e0d4d9542a843e402f',
    }
  }
})

export const client = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink),
});

export default client;