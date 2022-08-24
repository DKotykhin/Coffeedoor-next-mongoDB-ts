import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Link from "next/link";

import { toast } from 'react-toastify';

import { Box, Button, Container, Typography } from "@mui/material";

import AdminCard from "./AdminCard";
import AdminMenu from "./AdminMenu";
import Spinner from "../spinner/Spinner";
import { getCollectionItems } from "../../store/adminSlice";
import { selectCollection } from "../../store/selectors";
import { getData } from "./AdminApi";

const AdminButtons: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const { collectiondata } = useAppSelector(selectCollection);

    const ListClick = (collection: string) => {
        setLoading(true);
        getData(collection)
            .then((data) => {                
                if (collection === "menu_multilang") {
                    dispatch(getCollectionItems({ collection, carddata: [], menudata: data }));
                } else {
                    dispatch(getCollectionItems({ collection, carddata: data, menudata: [] }));
                }
                setLoading(false);                
            })
            .catch(function (error) {
                console.warn(error.message);
                toast.error("Can't get data from database");
            });
    };

    return (
        <Container>
            <Typography sx={{ textAlign: "center", m: 3, fontSize: 22 }}>
                Панель адміністрування
            </Typography>
            <Link href="/">
                <Button sx={{ display: "block", margin: "0 auto" }}>
                    Повернутися на головну
                </Button>
            </Link>
            <Box sx={{ textAlign: "center" }}>
                <Button
                    variant="outlined"
                    sx={{ m: 2 }}
                    onClick={() => ListClick("coffeelist_multilang")}
                >
                    CoffeeList
                </Button>
                <Button
                    variant="outlined"
                    sx={{ m: 2 }}
                    onClick={() => ListClick("tealist_multilang")}
                >
                    TeaList
                </Button>
                <Button
                    variant="outlined"
                    sx={{ m: 2 }}
                    onClick={() => ListClick("jamlist_multilang")}
                >
                    JamList
                </Button>
                <Button
                    variant="outlined"
                    sx={{ m: 2 }}
                    onClick={() => ListClick("millslist_multilang")}
                >
                    MillsList
                </Button>
                <Button
                    variant="outlined"
                    sx={{ m: 2 }}
                    onClick={() => ListClick("menu_multilang")}
                >
                    Menu
                </Button>
            </Box>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {collectiondata && (
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", mt: 2 }}
                        >
                            {"Знайдено "}
                            {collectiondata.carddata.length ? collectiondata.carddata.length : null}
                            {collectiondata.menudata.length ? collectiondata.menudata.length : null}
                            {(collectiondata.carddata.length || collectiondata.menudata.length) > 4
                                ? " елементів"
                                : " елемента"}
                        </Typography>
                    )}
                    {/* {collectiondata.menudata?.length > 0 && (
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", mt: 2 }}
                        >
                            {"Знайдено "}
                            {collectiondata.menudata.length}
                            {collectiondata.menudata.length > 4
                                ? " елементів"
                                : " елемента"}
                        </Typography>
                    )} */}
                    {collectiondata.collection !== "menu_multilang"
                        ? collectiondata.carddata?.map((item) => (
                            <AdminCard props={item} key={item._id} />
                        ))
                        : collectiondata.menudata?.map((item) => (
                            <AdminMenu props={item} key={item._id} />
                        ))}
                </>
            )}
        </Container>
    );
}

export default AdminButtons;
