import Head from "next/head";
import type { NextPage } from 'next';

import Error from "../components/error/Error";

const Page404: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Сторінка не знайдена" />
                <title>Сторінка не знайдена</title>
            </Head>
            <Error />
        </>
    );
};

export default Page404;
