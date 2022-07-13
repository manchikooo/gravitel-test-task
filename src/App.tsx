import React, {useEffect, useState} from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, gql, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

type UserType = {
    username: string
    password: string
    token: string
}
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
    const [userData, setUserData] = useState({username: 'UserOne', password: 'pass',})
    const [dashboard, setDashboard] = useState<null>(null)

    const userDataHandler = ({target: {name, value}}: { target: { name: string, value: string } }) => {
        setUserData((data) => ({...data, [name]: value}));
    }

    const loginHandler = () => {
        client.mutate({
            mutation: gql`
            mutation Login {
                login(username: "${userData.username}", password: "${userData.password}"){
                    username
                    password
                    token
                }
            }`
        }).then(result => {
            alert('Вы успешно вошли')
            localStorage.setItem('token', result.data.login.token)
        }).catch(error => {
            alert('Данные введены неверно')
        }).then(() => {
            client.query({
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
                .then(res => console.log(res))
        })
    }

    return (
        <ApolloProvider client={client}>
            <div className="App">
                <input value={userData.username} onChange={e => userDataHandler(e)} name='username'></input>
                <input value={userData.password} onChange={e => userDataHandler(e)} name='password'></input>
                <button onClick={loginHandler}>Login</button>
                {dashboard}
            </div>
        </ApolloProvider>
    );
}

export default App;
