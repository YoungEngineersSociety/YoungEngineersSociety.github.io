import React, { useState } from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
    data: MultiInput;
}

const ButtonGroup: React.FC<Props> = ({ data }) => {
    const { control, errors } = useFormContext();

    const { id, label, help, required, options } = data;

    return (
        <div>
            <label>{label}</label>
            <Controller
                as={<ButtonGroupComponent options={options} required={required} />}
                name={label}
            />
        </div>
    );
}

const ButtonGroupComponent: React.FC<{options: {value: string, label: string}[], required: boolean}> = ({ options, required }) => {
    const [selected, setSelected] = useState<string>();

    const buttons = options.map((option: {value: string, label: string}) => (
        <div key={option.value} onClick={() => setSelected(option.value)}>
            {option.label}
        </div>
    ));

    return (
        <div>
            {buttons}
        </div>
    );
}

export default ButtonGroup;