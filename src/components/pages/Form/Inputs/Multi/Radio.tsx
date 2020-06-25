import React from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { FormControlLabel, Radio as RadioButton, RadioGroup, FormControl, FormLabel } from '@material-ui/core';

interface Props {
    data: MultiInput
}

const Radio: React.FC<Props> = ({ data }) => {
    const { id, label, help, required, options } = data;

    const radios = options.map(option =>   <FormControlLabel
    value={option.value}
    control={<RadioButton color="primary" />}
    label={option.label}
    labelPlacement='end'
    key={option.value} />)

    return (
    <FormControl component="fieldset" id={id}>
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup>
            {radios}
        </RadioGroup>
    </FormControl>
    )
}

export default Radio;