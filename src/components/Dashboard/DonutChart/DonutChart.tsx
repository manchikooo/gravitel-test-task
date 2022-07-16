import React, {useState, MouseEvent} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import {ItemsConditionType} from "../Dashboard";
import {LegendsBlock, PieValueBlock, DonutChartBlock, PieValueTexted, DonutChartWrapper} from "./DonutChartStyles";
import {Legend} from "./Legend/Legend";

export type PieSectorType = {
    title: string
    value: number
    color: string
}
type PieDataType = Array<PieSectorType>

type DonutChartPropsType = {
    donutBoard: ItemsConditionType
}

export const DonutChart = ({donutBoard}: DonutChartPropsType) => {
    const [currentPieIndex, setCurrentPieIndex] = useState<number | null>(null)

    const pieData: PieDataType = [
        {title: 'Активных', value: Number(donutBoard.active), color: '#F8A853'},
        {title: 'Неактивных', value: Number(donutBoard.inactive), color: '#bfbfbf'},
        {title: 'Завершенных', value: Number(donutBoard.completed), color: '#FCCE82'},
        {title: 'Всего', value: 0, color: '#EE614C'},
    ]

    const totalValue = pieData.reduce((acc, pie) => acc + pie.value, 0)

    const onLegendHandler = (e: MouseEvent<HTMLSpanElement>) => {
        setCurrentPieIndex(Number(e.currentTarget.dataset.index))
    }

    const onPieSectorHandler = (e: MouseEvent, segmentIndex: number) => {
        setCurrentPieIndex(segmentIndex)
    }

    const segmentStyleHandler = (segmentIndex: number) => {
        if (segmentIndex === currentPieIndex || currentPieIndex === 3)
            return {strokeWidth: 10, cursor: 'pointer'};
    }

    return (
        <DonutChartWrapper>
            <DonutChartBlock>
                <PieChart
                    data={pieData}
                    lineWidth={15}
                    rounded
                    onMouseOver={onPieSectorHandler}
                    onMouseOut={(e) => setCurrentPieIndex(null)}
                    segmentsStyle={segmentStyleHandler}
                />
                <PieValueBlock>
                    {currentPieIndex === 0 || currentPieIndex
                        ? <>
                            <PieValueTexted
                                color={pieData[currentPieIndex].color}>{pieData[currentPieIndex].title}</PieValueTexted>
                            <PieValueTexted>{pieData[currentPieIndex].title === 'Всего'
                                ? totalValue
                                : pieData[currentPieIndex].value}</PieValueTexted>
                        </>
                        : <>
                            <PieValueTexted>Всего</PieValueTexted>
                            <PieValueTexted>{totalValue}</PieValueTexted>
                        </>}
                </PieValueBlock>
            </DonutChartBlock>
            <LegendsBlock>
                {pieData.map((legend, i) =>
                    <Legend
                        legend={legend}
                        pieIndex={i}
                        currentIndex={currentPieIndex}
                        key={legend.title}
                        onMouseOverHandler={onLegendHandler}
                        onMouseOutHandler={setCurrentPieIndex}
                        totalValue={totalValue}
                    >
                    </Legend>
                )}
            </LegendsBlock>
        </DonutChartWrapper>
    );
};

