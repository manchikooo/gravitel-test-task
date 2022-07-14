import React, {useState} from 'react';
import {ApolloClient, gql, NormalizedCacheObject} from "@apollo/client";
import {Navigate, useNavigate} from "react-router-dom";

type LoginPagePropsType = {
    client: ApolloClient<NormalizedCacheObject>
}

export const LoginPage = (props: LoginPagePropsType) => {

    const navigate = useNavigate()

    const [userLoginData, setUserLoginData] = useState({username: 'UserOne', password: 'pass',})
    const userDataHandler = ({target: {name, value}}: { target: { name: string, value: string } }) => {
        setUserLoginData((data) => ({...data, [name]: value}));
    }
    const loginHandler = () => {
        props.client.mutate({
            mutation: gql`
            mutation Login {
                login(username: "${userLoginData.username}", password: "${userLoginData.password}"){
                    username
                    password
                    token
                }
            }`
        }).then(result => {
            alert('Вы успешно вошли')
            localStorage.setItem('token', result.data.login.token)
            navigate('/dashboard')
        }).catch(error => {
            alert('Данные введены неверно')
        })
    }

    return (
        <div className="App">
            <input value={userLoginData.username} onChange={e => userDataHandler(e)} name='username'></input>
            <input value={userLoginData.password} onChange={e => userDataHandler(e)} name='password'></input>
            <button onClick={loginHandler}>Login</button>
        </div>
    );
};