import React from 'react';
import useForm from '../../../hooks/Apollo/useForm/useForm';
import { useForm as useFormHook, FormContext } from "react-hook-form";
import InputFactory from './Inputs/InputFactory';

interface Props {
    id: string;
}

const Form: React.FC<Props> = ({ id }) => {
    const {
        loading,
        error,
        formName,
        schema
    } = useForm(id);

    const methods = useFormHook();

    if(loading || error || !formName || !schema || schema.length < 1) {
        return <>error</>
    }

    const onSubmit = (data: any) => console.log(data);

    console.log(schema);

    return <div>
        <h1>{formName}</h1>
        <FormContext {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {schema.map(input => <InputFactory data={input} />)}
            </form>
        </FormContext>
    </div>
}

export default Form;