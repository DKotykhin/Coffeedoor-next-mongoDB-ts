import { useEffect, useState } from "react";

import Head from "next/head";
import type { NextPage } from 'next';

import AdminButtons from "../../components/adminPanel/AdminButtons";
import LoginBlock from "../../components/adminPanel/LoginBlock";

interface ILoginData {
    login: string
}

const AdminPage: NextPage = () => {
    const [login, setLogin] = useState(false);
    const password = process.env.NEXT_PUBLIC_LOGIN_PASSWORD;

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("rememberMe");
        setLogin(sessionToken === password);
    }, [password]);

    const LoginSubmit = (data: ILoginData) => {
        if (data.login === password) {
            setLogin(true);
            sessionStorage.setItem("rememberMe", data.login);
        }
    };

    return (
        <>
            <Head>
                <meta name="description" content="Admin Page" />
                <title>Admin Page</title>
            </Head>
            {login ? (
                <AdminButtons />
            ) : (
                <LoginBlock LoginSubmit={LoginSubmit} />
            )}            
        </>
    );
};

export default AdminPage;
