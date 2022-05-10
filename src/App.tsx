import React, {useEffect} from 'react';
import './index.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import TabEur from './pages/TabEur/TabEur';
import TabUsd from './pages/TabUsd/TabUsd';
import TabPln from './pages/TabPln/TabPln';
import BasicTabs from './components/Tabs/Tabs';
import {getConverterRate, setLoading} from './store/actions/convertorActions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, TypedDispatch} from './store';
import Input from './components/Input/Input';
import CircularProgress from '@mui/material/CircularProgress';
import {CurrencyType} from './utils/enums'

const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch<TypedDispatch>();
    const loading = useSelector((state: RootState) => state.convertor.loading);

    useEffect(() => {
        dispatch(setLoading());
        dispatch(getConverterRate(CurrencyType.EUR));
        dispatch(getConverterRate(CurrencyType.USD));
        dispatch(getConverterRate(CurrencyType.PLN));
    }, [])


    return (
        <>
            {loading
                    ? <CircularProgress sx={{margin: 'calc(50vh - 50px) calc(52% - 50px) 0px' }} />
                : <>
                    <BasicTabs />
                    <Routes>
                        <Route path="/" element={<TabUsd/>}/>
                        <Route path="/UAH-EUR" element={<TabEur/>}/>
                        <Route path="/UAH-PLN" element={<TabPln/>}/>
                        <Route
                            path="*"
                            element={<Navigate to="/" replace/>}
                        />
                    </Routes>
                    <Input title={'Enter amount of UAH'} />
                </>}
        </>
    );
}

export default App;
