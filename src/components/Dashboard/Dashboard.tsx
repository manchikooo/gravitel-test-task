import React from 'react';
import {useQuery} from "@apollo/client";
import {DonutChart} from "../../components";
import {useNavigate} from "react-router-dom";
import {GET_DASHBOARD} from "../../api/requests";
import {DashboardBlock} from "./DashboardStyles";

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

    const {data} = useQuery<{ dashboard: DashboardItemsType }>(GET_DASHBOARD)

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <DashboardBlock>
            {data && <>
                <DonutChart donutBoard={data.dashboard['scenarios']}/>
                <DonutChart donutBoard={data.dashboard['dialogs']}/>
                <DonutChart donutBoard={data.dashboard['lists']}/>
            </>}
            {/*<button onClick={logoutHandler}>Logout*/}
            {/*</button>*/}
        </DashboardBlock>
    );
};