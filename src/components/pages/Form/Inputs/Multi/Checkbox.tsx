import React from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { useFormContext } from 'react-hook-form';

interface Props {
    data: MultiInput;
}

const Checkbox: React.FC<Props> = ({ data }) => {
    const {
        register,
        // errors
    } = useFormContext();

    const {
        id,
        label,
        // help,
        // required,
        options
    } = data;

    const checks = options.map((option: {value: string, label: string}) => (
        <div key={option.value}>
            <label>{option.label}</label>
            <input type="checkbox" id={option.value} name={id} value={option.value} ref={register} />
        </div>
    ));

    return (
        <div>
            <label>{label}</label>
            {checks}
        </div>
    );
}

export default Checkbox;