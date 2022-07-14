import React from 'react';
import Chart from 'react-apexcharts';

type DonutChartPropsType = {
    donutBoard: { active: string, inactive: string, completed: string }
    title: string
}

export const DonutChartBlock = ({donutBoard, title}: DonutChartPropsType) => {
    console.log('pr', donutBoard)

    return (
        <div>
            <Chart
                type='donut'
                width={500}
                height={500}
                series={[+donutBoard.active, +donutBoard.inactive, +donutBoard.completed]}
                options={{
                    labels: ['Активных', 'Неактивных', 'Завершенных', 'Всего'],
                    legend: {
                        position: 'bottom',
                        fontSize: '15',
                        markers: {
                            width: 15,
                            height: 15,
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        }
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

