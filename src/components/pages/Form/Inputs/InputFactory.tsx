import React from 'react';
import { InputData, TextInput, MultiInput } from '../../../../hooks/Apollo/useForm/useForm';
import TextField from './Text/Text';
import CheckboxField from './Multi/Checkbox';
import RadioField from './Multi/Radio';
import SelectField from './Multi/Select';
import ButtonGroup from './Multi/ButtonGroup';

interface Props {
    data: InputData;
}

const InputFactory: React.FC<Props> = ({ data }) => {
    switch(data.type) {
        case 'text':
            return <TextField data={data as TextInput} />;
        case 'check':
            return <CheckboxField data={data as MultiInput} />;
        case 'radio':
            return <RadioField data={data as MultiInput} />;
        case 'select':
            return <SelectField data={data as MultiInput} />;
        case 'buttonGroup':
            return <ButtonGroup data={data as MultiInput } />
        default:
            return null;
    };
};

export default InputFactory;