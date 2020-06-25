import React from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import Checkbox from './Checkbox';
import Radio from './Radio';

interface Props {
    data: MultiInput
}

const Multi: React.FC<Props> = ({data}) => {
    switch (data.presentation) {
        case 'check':
            return <Checkbox data={data} />
        case 'radio':
            return <Radio data={data} />
        default:
            return null;
    }
}

export default Multi;