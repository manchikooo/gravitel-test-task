import React, {KeyboardEvent, useEffect, useState} from 'react';
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import styles from './LoginPage.module.css'
import {LOGIN} from "../../api/requests";
import {GraphQLError} from "graphql";

type UserLoginDataType = {
    username: string
    password: string
}

type TargetType = {
    name: string
    value: string
}

type UserDataTargetType = {
    target: TargetType
}

export const LoginPage = () => {
    const navigate = useNavigate()

    const [error, setError] = useState<string>('')
    const [userLoginData, setUserLoginData] = useState<UserLoginDataType>({username: 'UserOne', password: 'pass',})

    const userDataHandler = ({target: {name, value}}: UserDataTargetType) => {
        setUserLoginData((data) => ({...data, [name]: value}));
    }
    const {username, password} = userLoginData
    const [callback, {data, loading}] = useMutation(LOGIN, {
        variables: {username, password}
    })

    const loginHandler = async () => {
        try {
            const result = await callback()
            localStorage.setItem('token', result.data.login.token)
        } catch (error: any) {
            const err = error as GraphQLError
            setError(err.message)
        }

    }

    const loginOnEnterPress = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            await loginHandler()
        }
    }

    const disableCondition = userLoginData.username === ''
        || userLoginData.password === ''
        || loading

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard')
        }
    }, [data])

    return (
        <div className={styles.loginBlock}>
            <h2 className={styles.title}>Вход</h2>
            <input
                className={`${styles.input} ${styles.login}`}
                value={userLoginData.username}
                onChange={e => userDataHandler(e)}
                onKeyPress={(e) => loginOnEnterPress(e)}
                placeholder={'Логин'}
                name='username'/>
            <input
                className={`${styles.input} ${styles.password}`}
                value={userLoginData.password}
                onChange={e => userDataHandler(e)}
                onKeyPress={(e) => loginOnEnterPress(e)}
                placeholder={'Пароль'}
                type='password'
                name='password'/>
            <div className={styles.errorBlock}>
                {error}
            </div>
            <button
                className={styles.button}
                onClick={loginHandler}
                disabled={disableCondition}>
                Login
            </button>
        </div>
    );
};