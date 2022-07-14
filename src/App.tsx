import React from 'react';
import {Route, Routes,} from "react-router-dom";
import './App.css';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {Dashboard} from "./components/Dashboard/Dashboard";

const httpLink = new HttpLink({
    uri: 'https://gravitel-graphql-backend.herokuapp.com/graphql',
});
const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

    return (
        <ApolloProvider client={client}>
            <Routes>
                <Route path='/login' element={<LoginPage client={client}/>}/>
                <Route path='/dashboard' element={<Dashboard client={client}/>}/>
            </Routes>
        </ApolloProvider>
    );
}

export default App;
