import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component={Link}
            to={props.href!}
            {...props}
        />
    );
}

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        const currentLocation = window.location.pathname;

        if(currentLocation === '/UAH-EUR') {
            setValue(1)
        }
        if(currentLocation === '/UAH-PLN') {
            setValue(2)
        }
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange}>
                <LinkTab label="UAH-USD" href="/" />
                <LinkTab label="UAH-EUR" href="/UAH-EUR" />
                <LinkTab label="UAH-PLN" href="/UAH-PLN" />
            </Tabs>
        </Box>
    );
}

