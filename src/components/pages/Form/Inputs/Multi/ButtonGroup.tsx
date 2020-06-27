import React, { useState } from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
    data: MultiInput;
}

const ButtonGroup: React.FC<Props> = ({ data }) => {
    const {
        control,
        // errors
    } = useFormContext();

    const [
        value,
        setValue
    ] = useState<string>('');

    const {
        id,
        label,
        // help,
        required,
        options
    } = data;

    return (
        <div>
            <label>{label}</label>
            <Controller
                as={ButtonGroupComponent}
                name={id}
                options={options}
                required={required}
                value={value}
                setValue={setValue}
                control={control}
                onChangeName="setValue"
            />
        </div>
    );
}

interface ComponentProps {
    options: {
        value: string,
        label: string
    }[],
    required: boolean,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const ButtonGroupComponent: React.FC<ComponentProps> = ({ options, required, value, setValue }) => {
    return (
        <>
            { options.map((option: {value: string, label: string}) => (
                <div className={value === option.value? "text-orange-light" : ""} key={option.value} onClick={() => setValue(option.value)}>
                    {option.label}
                </div>
            ))}
        </>
    );
}

export default ButtonGroup;