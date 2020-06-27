import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ROUTER_PATHS_QUERY = gql`
  {
    homePage {
      path
    }
    allForms {
      id
      path
    }
  }
`;

const RouterPaths = () => {
  const { loading, error, data } = useQuery(ROUTER_PATHS_QUERY);

  if (!data) {
    return {
      loading,
      error
    }
  }

  return ({
    loading,
    error,
    homepagePath: data.homePage,
    formPaths: data.allForms
  })
}

export default RouterPaths;