import Head from "next/head";
import Link from "next/link";
import type { NextPage } from 'next';

import { Typography, Button } from "@mui/material";

import { selectCollection } from "../../store/selectors";
import { useAppSelector } from "../../store/hook";

import AddCard from "../../components/adminPanel/addCard/AddCard";
import AddMenu from "../../components/adminPanel/addMenu/AddMenu";

import { ICard } from '../../types/cardType';
import { IMenu } from '../../types/menuType';

const AddPage: NextPage = () => {
    const { collectiondata, id } = useAppSelector(selectCollection);

    const pageMenuItem = collectiondata.menudata?.filter(
        (item: IMenu) => item._id === id
    );    
    const pageCardItem = collectiondata.carddata?.filter(
        (item: ICard) => item._id === id
    );

    return (
        <>
            <Head>
                <meta name="description" content="Add Card Page" />
                <title>Add Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка додавання товара
            </Typography>
            {collectiondata ? (
                collectiondata.collection !== 'menu_multilang' ?
                    <AddCard
                        cardData={pageCardItem[0]}
                        collection={collectiondata.collection}
                    /> :
                    <AddMenu
                        cardData={pageMenuItem[0]}
                        collection={collectiondata.collection}
                    />

            ) : (
                <Link href="/admin">
                    <Button sx={{ display: "block", margin: "50px auto" }}>
                        Повернутися на панель адміністрування
                    </Button>
                </Link>
            )}
        </>
    );
};

export default AddPage;