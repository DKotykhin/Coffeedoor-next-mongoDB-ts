import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from 'next';

import { Typography, Button } from "@mui/material";

import { selectCollection } from "../../store/selectors";
import { useAppSelector } from "../../store/hook";

import UpdateCard from "../../components/adminPanel/updateCard/UpdateCard";
import UpdateMenu from "../../components/adminPanel/updateMenu/UpdateMenu";

import { ICard } from '../../types/cardType';
import { IMenu } from '../../types/menuType';

const IdPage: NextPage = () => {
    const router = useRouter();
    const { collectiondata } = useAppSelector(selectCollection);

    const pageCardItem = collectiondata.carddata?.filter(
        (item: ICard) => item._id === router.query.id
    );
    const pageMenuItem = collectiondata.menudata?.filter(
        (item: IMenu) => item._id === router.query.id
    );     

    return (
        <>
            <Head>
                <meta name="description" content="Card Page" />
                <title>Card Page</title>
            </Head>
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>
                Картка товара
            </Typography>
            {collectiondata ? (
                collectiondata.collection !== 'menu_multilang' ? 
                <UpdateCard
                    cardData={pageCardItem[0]}
                    id={router.query.id}
                    collection={collectiondata.collection}
                /> :
                <UpdateMenu
                    cardData={pageMenuItem[0]}
                    id={router.query.id}
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

export default IdPage;
