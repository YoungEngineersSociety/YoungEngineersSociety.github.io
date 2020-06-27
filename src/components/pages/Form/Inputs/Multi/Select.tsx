import React from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import ReactSelect from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
    data: MultiInput;
}

const Select: React.FC<Props> = ({ data, }) => {
    const {
        control,
        // errors
    } = useFormContext();

    const {
        id,
        label,
        // help,
        // required,
        options
    } = data;

    return (
        <div>
            <label>{label}</label>
            <Controller
                as={<ReactSelect options={options} />}
                name={id}
                control={control}
            />
        </div>
    );
}

export default Select;