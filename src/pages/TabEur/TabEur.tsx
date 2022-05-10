import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {GetConvertorData} from '../../store/types';
import TabText from '../../components/TabText/TabText';
import {CurrencyType} from '../../utils/enums';

const TabEur: React.FC = (): JSX.Element => {
    const convertorData = useSelector((state: RootState) => state.convertor.data);
    const enteredUah = useSelector((state: RootState) => state.convertor.enteredUah);
    const dataEur = convertorData.find((dataItem: GetConvertorData) => dataItem.rates.EUR);

    return (
        <TabText currency={CurrencyType.EUR} enteredUah={enteredUah!} exchangeRate={dataEur?.rates?.EUR} />
    )
}

export default TabEur;
