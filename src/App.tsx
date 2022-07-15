import React from 'react';
import {Navigate, Route, Routes,} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {Dashboard, LoginPage} from "./components";
import {client} from "./apollo/apollo";

// притиер, функции из jsx, +деструктуризация+, нейминг пропсов, вынести запрос, вынести создание аполо клиента


export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/' element={<Navigate to={'/dashboard'}/>}/>
            </Routes>
        </ApolloProvider>
    );
}