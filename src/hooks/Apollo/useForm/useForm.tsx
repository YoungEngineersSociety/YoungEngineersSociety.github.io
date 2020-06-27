import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { propOr } from 'ramda';

const HOMEPAGE_QUERY = gql`
  query Form($id: ItemId) {
    form(filter: {id: {eq: $id}}) {
      formName
      schema
    }
  }
`;

interface Form {
  formName: string,
  schema: InputData[]
}

type Next = string | 'end' | 'next';

type MultiType = 'radio' | 'check' | 'buttonGroup' | 'select';

export type InputType = 'text' | MultiType;

export interface InputData {
  type: InputType,
  id: string,
  required: boolean,
  label: string,
  help: string | undefined,
  next: Next;
}

export interface TextInput extends InputData {
  type: 'text',
  prefill: string | undefined
}

export interface MultiInput extends InputData {
  type: MultiType,
  multiType: 'Dest' | 'Route',
  options: Array<{
    value: string,
    label: string
  }>
}

const useForm = (id: string) => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {variables: {id: id}});

  
  const formData = propOr(
    null,
    'form',
    data
  ) as Form;

  if(!formData || !formData.formName || !formData.schema) {
    return {loading, error};
  }

  return {
    loading,
    error,
    formName: formData.formName,
    schema: formData.schema
  }
}

export default useForm;