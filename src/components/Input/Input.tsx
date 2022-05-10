import React, {useState, FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAlert} from '../../store/actions/alertActions';
import { setUah, setError} from '../../store/actions/convertorActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {RootState, TypedDispatch} from '../../store';
import Alert from '../Alert/Alert';

interface SearchProps {
    title: string;
}

const Input: React.FC<SearchProps> = (props: SearchProps): JSX.Element => {
    const {title} = props;
    const dispatch = useDispatch<TypedDispatch>();
    const [enteredUah, setEnteredUah] = useState('');
    const error = useSelector((state: RootState) => state.convertor.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);

    const changeHandler = (event: React.ChangeEvent<{ value: string}>) => {
        setEnteredUah(event.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (enteredUah.trim() === '') {
            return dispatch(setAlert('amount field is required!'));
        }
        dispatch(setUah(Number(enteredUah)));
    }

    return (
        <div style={{textAlign: 'center', marginBottom: 10}}>
            <Typography style={{margin: '25px 0'}} variant="h1">{title}</Typography>
            <form onSubmit={submitHandler}>
                <TextField
                    type={"number"}
                    value={enteredUah}
                    onChange={changeHandler}
                    placeholder="Enter amount number"
                    style={{maxWidth: 300}}
                    inputProps={{
                        step: "any",
                        min: "0"
                    }}
                />
                <Button
                    type="submit"
                    sx={{
                        height: 56,
                        marginLeft: '5px',
                        padding: '10px 15px'
                    }}
                    variant="contained"
                    size="small"
                >
                    Сalculate
                </Button>
            </form>
            {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
            {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
        </div>
    );
}

export default Input;
