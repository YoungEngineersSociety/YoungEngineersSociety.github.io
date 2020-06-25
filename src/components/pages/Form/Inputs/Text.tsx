import React from 'react';
import { TextInput } from '../../../../hooks/Apollo/useForm/useForm';
import TextField from '@material-ui/core/TextField';

interface Props {
    data: TextInput
}

const Text: React.FC<Props> = ({data}) => {
    const {id, label, help, required, } = data;

    return <TextField id={id} label={label} variant="outlined" helperText={help} required={required} />
}

export default Text;