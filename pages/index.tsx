
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { connectToDatabase } from "../lib/mongodb";
import { ICardList } from '../types/cardType';

import NavDrawer from "../components/drawer/Drawer";
import FirstBlock from "../components/firstBlock/FirstBlock";
import InfoBlock from "../components/infoBlock/InfoBlock";
import Catalog from "../components/catalog/Catalog";
import AboutBlock from "../components/aboutblock/AboutBlock";
import Basket from "../components/basket/Basket";
interface HomePage {
    cataloglist: ICardList
}

const Home: React.FC<HomePage> = ({ cataloglist }) => {

    return (
        <div>
            <Head>
                <title>
                    {"CoffeeDoor - кав'ярня та магазин свіжообсмаженої кави"}
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="CoffeeDOOR – це кавовий бренд, який по'єднує в собі свіжообсмажену каву рівня Speciality, кращі кавові технології, стильний дизайнерський інтер'єр, швидкий і дружній сервіс"
                />
                <meta name="keywords" content="кава в зернах, кавомолка, кофе, кофемолка" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo_192x192.png" />
            </Head>
            <NavDrawer />
            <FirstBlock />
            <InfoBlock />
            <Catalog cataloglist={cataloglist} />
            <AboutBlock />
            <Basket />
        </div>
    )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const { db } = await connectToDatabase();
    const coffeelist = await db
        .collection("coffeelist_multilang")
        .find({ hide: { $ne: true } })
        .sort({ position: 1 })
        .toArray();
    const jamlist = await db
        .collection("jamlist_multilang")
        .find({ hide: { $ne: true } })
        .sort({ position: 1 })
        .toArray();
    const tealist = await db
        .collection("tealist_multilang")
        .find({ hide: { $ne: true } })
        .sort({ position: 1 })
        .toArray();
    const millslist = await db
        .collection("millslist_multilang")
        .find({ hide: { $ne: true } })
        .sort({ position: 1 })
        .toArray();
    return {
        props: {
            cataloglist: JSON.parse(
                JSON.stringify({ coffeelist, jamlist, tealist, millslist })
            ),
        },
    };
}
