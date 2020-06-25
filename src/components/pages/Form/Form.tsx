import React, { useState } from 'react';
import useForm from '../../../hooks/Apollo/useForm/useForm';
import Input from './Input';

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

    const [currField, setCurrField] = useState<string | null>(null);
    const [lastField, setLastField] = useState<string | null>(null);
    const state = {
        curr: {
            value: currField,
            set: setCurrField
        },
        last: {
            value: lastField,
            set: setLastField
        }
    }

    if(loading || error || !formName || !schema || schema.length < 1) {
        return <>error</>
    }

    if (currField === null) {
        setCurrField(schema[0].id);
    }

    var inputData = schema.find((input) => input.id === currField)

    if (!inputData) {
        inputData = schema[0];
    }

    return <div>
        <h1>{formName}</h1>
        <form>
            <Input data={inputData} state={state} />
        </form>
    </div>
}

export default Form;