import React from 'react';
import {Navigate, Route, Routes,} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {Dashboard, LoginPage} from "./components";
import {client} from "./apollo/apollo";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/' element={<Navigate to={'/login'}/>}/>
            </Routes>
        </ApolloProvider>
    );
}