import React, {useState, MouseEvent} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import styles from './DonutChart.module.css'
import {ItemsConditionType} from "../Dashboard";

type PieSectorType = {
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
        {title: 'Активных', value: Number(donutBoard.active), color: '#E38627'},
        {title: 'Неактивных', value: Number(donutBoard.inactive), color: '#C13C37'},
        {title: 'Завершенных', value: Number(donutBoard.completed), color: '#6A2135'},
    ]
    const totalValue = pieData.reduce((acc, pie) => acc + pie.value, 0)

    const onLegendHandler = (e: MouseEvent<HTMLSpanElement>) => {
        setCurrentPieIndex(Number(e.currentTarget.dataset.index))
    }
    const labelHandler = () => currentPieIndex === 0 || currentPieIndex
        ? pieData[currentPieIndex].value
        : totalValue

    const onPieSectorHandler = (e: MouseEvent, segmentIndex: number) => setCurrentPieIndex(segmentIndex)

    const segmentStyleHandler = (segmentIndex: number) => {
        if (segmentIndex === currentPieIndex)
            return {strokeWidth: 10, cursor: 'pointer'};
    }

    return (
        <div>
            <PieChart
                className={styles.pieChart}
                data={pieData}
                lineWidth={15}
                totalValue={totalValue}
                label={labelHandler}
                labelPosition={0}
                onMouseOver={onPieSectorHandler}
                onMouseOut={(e) => setCurrentPieIndex(null)}
                segmentsStyle={segmentStyleHandler}
            />
            <div>
                {pieData.map((legend, i) =>
                    <div
                        key={legend.title}
                        data-index={String(i)}
                        onMouseOver={onLegendHandler}
                        onMouseOut={(e) => setCurrentPieIndex(null)}>
                        {legend.title}: {legend.value}
                    </div>
                )}
            </div>
        </div>
    );
};

