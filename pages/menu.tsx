import Head from "next/head";
import { GetServerSideProps } from 'next';

import { connectToDatabase } from "../lib/mongodb";

import Accordeon from "../components/accordeon/Accordeon";
import MenuTitle from "../components/menuTitle/MenuTitle";
import ReturnButton from "../components/returnButton/ReturnButton";
import { IMenu } from "../types/menuType";

interface MenuPage {
    menulist: IMenu[]
}

const MenuPage: React.FC<MenuPage> = ({ menulist }) => {    

    return (
        <>
            <Head>
                <meta name="description" content="Меню кав'ярні" />
                <title>{"Меню кав'ярні"}</title>
            </Head>
            <MenuTitle />
            <Accordeon menulist={menulist} />
            <ReturnButton />
        </>
    );
}

export default MenuPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const { db } = await connectToDatabase();

    const menu_multilang = await db
        .collection("menu_multilang")
        .find({ hide: { $ne: true } })
        .sort({ position: 1 })
        .toArray();

    return {
        props: {
            menulist: JSON.parse(JSON.stringify(menu_multilang)),
        },
    };
}
