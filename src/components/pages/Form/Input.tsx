import React, { Dispatch, SetStateAction } from 'react';
import { InputData, TextInput, MultiInput } from '../../../hooks/Apollo/useForm/useForm';
import Text from './Inputs/Text';
import Multi from './Inputs/Multi/Multi';

interface Props {
    data: InputData,
    state: {
        curr: {
            value: string | null,
            set: Dispatch<SetStateAction<string | null>>
        },
        last: {
            value: string | null,
            set: Dispatch<SetStateAction<string | null>>
        }
    }
}

const Input: React.FC<Props> = ({ data, state }) => {
    const input = EvolveInput(data);

    return (
    <div className="w-full h-full">
        {input}
        {data.next && data.next.length > 0 && <button onClick={() => {state.last.set(state.curr.value); state.curr.set(data.next[0].next)}}>next</button>}
    </div>
)}

const EvolveInput = (data: InputData) => {
    switch(data.type) {
        case 'text':
            return <Text data={data as TextInput} />;
        case 'multi':
            return <Multi data={data as MultiInput} />;
        default:
            return null;
    }
}

export default Input;