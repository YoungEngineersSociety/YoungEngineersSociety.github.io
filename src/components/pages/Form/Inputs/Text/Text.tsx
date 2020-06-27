import React from 'react';
import { TextInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { useFormContext } from 'react-hook-form';

interface Props {
    data: TextInput;
}

const Text: React.FC<Props> = ({ data }) => {
    const {
        register,
        // errors
    } = useFormContext();

    const {id, label, help, required, } = data;

    return <>
        <label>{label}</label>
        <input
            type="text"
            required={required}
            id={id}
            name={id}
            placeholder={help}
            ref={register}
        />
    </>
}

export default Text;