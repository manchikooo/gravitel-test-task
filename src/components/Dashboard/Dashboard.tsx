import React, {useEffect, useState} from 'react';
import {ApolloClient, gql, NormalizedCacheObject} from "@apollo/client";
import {DonutChartBlock} from "./DonutChart/DonutChartBlock";

export type DashboardType = {
    scenarios: {
        active: string
        inactive: string
        completed: string
    }
    lists: {
        active: string
        inactive: string
        completed: string
    }
    dialogs: {
        active: string
        inactive: string
        completed: string
    }
}

type DashboardPropsType = {
    client: ApolloClient<NormalizedCacheObject>
}

export const Dashboard = (props: DashboardPropsType) => {

    const [dashboard, setDashboard] = useState<DashboardType>({
        scenarios: {active: '', inactive: '', completed: ''},
        dialogs: {active: '', inactive: '', completed: ''},
        lists: {active: '', inactive: '', completed: ''}
    })

    useEffect(() => {
        props.client.query({
            query: gql`
            query GetDashboard {
               dashboard {
                scenarios {
                  active
                  inactive
                  completed
                 }
                lists {
                   active
                  inactive
                  completed
                 }
                dialogs {
                   active
                  inactive
                  completed
                 }
               }
             }`
        }).catch(error => alert('Ошибка запроса'))
            .then(result => setDashboard(result?.data.dashboard))
    }, [])
    return (
        <div style={{display: "flex", marginTop: '100px'}}>
            <DonutChartBlock donutBoard={dashboard['scenarios']}/>
            <DonutChartBlock donutBoard={dashboard['dialogs']}/>
            <DonutChartBlock donutBoard={dashboard['lists']}/>
        </div>
    );
};