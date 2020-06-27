import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { propOr } from 'ramda';

const MENU_QUERY = gql`
  query MyQuery {
    menu {
      menuItems {
        text
        link {
          ... on HomePageRecord {
            path
          }
          ... on FormRecord {
            path
          }
        }
      }
    }
  }
`;

interface Menu {
  menuItems: {
    text: string,
    link: {
      path: string
    }
  }[]
}

const useMenu = () => {
  const { loading, error, data } = useQuery(MENU_QUERY);

  
  const menuData = propOr(
    [],
    'menu',
    data
  ) as Menu;

  return {
    loading,
    error,
    menuItems: menuData.menuItems
  }
}

export default useMenu;