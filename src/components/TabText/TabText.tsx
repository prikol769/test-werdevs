import React from 'react';
import {Typography} from '@mui/material';

interface TabTextProps {
    currency: string;
    exchangeRate: number | undefined;
    enteredUah: number | null;
}

const TabText: React.FC<TabTextProps> = (props: TabTextProps): JSX.Element => {
    const {currency, exchangeRate, enteredUah} = props;

    return (
        <>
            <Typography
                sx={{color: 'secondary.dark'}}
                component="p"
                variant="h1"
            >Current UAH-{currency} exchange rate: {exchangeRate}</Typography>
            <Typography
                sx={{color: 'secondary.dark'}}
                component="p"
                variant="h1"
            > {enteredUah && exchangeRate ?
                `Calculated ${enteredUah} UAH = ${(exchangeRate * enteredUah).toFixed(2)} ${currency}`
                : 'Enter the amount of UAH'
            }</Typography>
        </>
    )
}

export default TabText;
