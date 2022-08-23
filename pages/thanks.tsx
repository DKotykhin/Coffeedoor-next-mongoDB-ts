import Head from "next/head";
import ThanksBlock from "../components/thanksBlock/ThanksBlock";

const ThanksPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Дякуємо за замовлення" />
                <title>Дякуємо за замовлення</title>
            </Head>
            <ThanksBlock />
        </>
    );
};

export default ThanksPage;
