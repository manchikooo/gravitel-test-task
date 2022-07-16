import React, {Dispatch, MouseEvent, SetStateAction} from 'react';
import {LegendStyled} from './LegendStyles';
import {PieSectorType} from "../DonutChart";

type LegendPropsType = {
    legend: PieSectorType
    pieIndex: number
    currentIndex: number | null
    onMouseOverHandler: (e: MouseEvent<HTMLSpanElement>) => void
    onMouseOutHandler: Dispatch<SetStateAction<number | null>>
    totalValue: number
    children: React.ReactNode
}

export const Legend = ({
                           legend,
                           pieIndex,
                           currentIndex,
                           onMouseOverHandler,
                           onMouseOutHandler,
                           totalValue
                       }: LegendPropsType) => {
    return (
        <LegendStyled
            color={legend.color}
            pieIndex={pieIndex}
            currentIndex={currentIndex}
            key={legend.title}
            data-index={pieIndex}
            onMouseOver={onMouseOverHandler}
            onMouseOut={() => onMouseOutHandler(null)}>
            {legend.title === 'Всего'
                ? <>
                    <span>{legend.title}:</span>
                    <span>{totalValue}</span>
                </>
                : <>
                    <span>{legend.title}:</span>
                    <span>{legend.value}</span>
                </>}
        </LegendStyled>
    );
};