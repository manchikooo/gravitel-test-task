import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';

type DonutChartPropsType = {
    donutBoard: { active: string, inactive: string, completed: string }
}

export const DonutChartBlock = ({donutBoard}: DonutChartPropsType) => {
    const [a, setA] = useState({seriesIndex: 0, dataPointIndex: 0, chartID: 0})
    useEffect(() => {
        ApexCharts.exec(`${a.chartID}`, 'toggleDataPointSelection', [a.seriesIndex, a.dataPointIndex])
    }, [a])
    console.log(a)
    return (
        <div>
            <Chart
                type='donut'
                width={350}
                height={350}
                series={[+donutBoard.active, +donutBoard.inactive, +donutBoard.completed]}
                options={{
                    labels: ['Активных', 'Неактивных', 'Завершенных', 'Всего'],
                    legend: {
                        tooltipHoverFormatter: (e, opts) => {
                            setA({
                                ...a,
                                seriesIndex: opts.seriesIndex,
                                dataPointIndex: opts.dataPointIndex,
                                chartID: opts.w.globals.chartID
                            })
                            // console.log(opts.w.globals.chartID)
                            return decodeURI(e)
                        },
                        onItemHover: {
                            highlightDataSeries: true
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        },
                        position: 'bottom',
                        fontSize: '15',
                        markers: {
                            width: 15,
                            height: 15,
                        },
                    },
                    plotOptions: {
                        pie: {
                            expandOnClick: true,
                            donut: {
                                labels: {
                                    show: true,
                                    total: {
                                        label: 'Всего',
                                        show: true,
                                        fontSize: '25',
                                        color: 'black'
                                    }
                                }
                            }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    }
                }}
            />
        </div>
    );
};

