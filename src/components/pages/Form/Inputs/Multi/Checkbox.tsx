import React from 'react';
import { MultiInput } from '../../../../../hooks/Apollo/useForm/useForm';
import { FormGroup, FormControlLabel, Checkbox as MaterialCheckbox, FormLabel } from '@material-ui/core';

interface Props {
    data: MultiInput
}

const Checkbox: React.FC<Props> = ({ data }) => {
    const { id, label, help, required, options } = data;

    const checks = options.map(option =>   <FormControlLabel
    value={option.value}
    control={<MaterialCheckbox color="primary" />}
    label={option.label}
    labelPlacement='end' />)

    return <FormGroup id={id}>
        <FormLabel component="legend">{label}</FormLabel>
        {checks}
    </FormGroup>
}

export default Checkbox;