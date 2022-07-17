import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {DonutChart} from "../../components";
import {useNavigate} from "react-router-dom";
import {GET_DASHBOARD} from "../../api/requests";
import {DashboardBlock, DashboardWrapper} from "./DashboardStyles";
import Button from "../Button/Button";
import {LoaderLine} from "../LoaderLine/LoaderLine";

type DashboardItemsType = {
    scenarios: ItemsConditionType
    lists: ItemsConditionType
    dialogs: ItemsConditionType
}
export type ItemsConditionType = {
    active: string
    inactive: string
    completed: string
}

export const Dashboard = () => {
    const navigate = useNavigate()

    const {data, loading} = useQuery<{ dashboard: DashboardItemsType }>(GET_DASHBOARD)

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    const mappedDonutCharts = data &&
        Object.keys(data.dashboard)
            .filter((el) => el !== '__typename')
            .map(el => {
                return <DonutChart
                    key={el}
                    donutName={el}
                    donutBoard={data.dashboard[el as keyof DashboardItemsType]}
                />
            })

    return (
        <DashboardWrapper>
            {loading && <LoaderLine/>}
            <DashboardBlock>
                {mappedDonutCharts}
            </DashboardBlock>
            <Button
                title='Выйти'
                onClickHandler={logoutHandler}/>
        </DashboardWrapper>
    );
};