import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {GetConvertorData} from '../../store/types';
import TabText from '../../components/TabText/TabText';
import {CurrencyType} from '../../utils/enums';

const TabUsd: React.FC = (): JSX.Element => {
    const convertorData = useSelector((state: RootState) => state.convertor.data);
    const enteredUah = useSelector((state: RootState) => state.convertor.enteredUah);
    const dataEur = convertorData.find((dataItem: GetConvertorData) => dataItem.rates.USD);

    return (
        <TabText currency={CurrencyType.USD} enteredUah={enteredUah} exchangeRate={dataEur?.rates?.USD} />
    )
}

export default TabUsd;
