import { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Typography, Button, Box } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";

import { useAppDispatch } from "../../store/hook";
import { basketAddItems } from "../../store/basketSlice";
import CardDetail from "../cardDetail/CardDetail";
import { ICard } from "../../types/cardType";

import styles from "./Card.module.scss";

interface ICatalogCard {
    props: ICard;
    i: number
}

const CatalogCard: React.FC<ICatalogCard> = ({ props, i }) => {
    const { _id, body, price, weight, card_img, order } = props;
    const { title, name, description, sort } = body[i];

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    let { t } = useTranslation("card");

    const handleDetail = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <CardDetail
                props={props}
                body={body[i]}
                openModal={open}
                closeModal={closeModal}
            />
            <Card sx={{ maxWidth: 350 }} className={styles.catalog_item} raised>
                <Image
                    src={
                        card_img
                            ? `/goodsimages/${card_img}`
                            : `/goodsimages/wait_1.webp`
                    }
                    alt={name}
                    width={350}
                    height={350}
                />
                <CardContent>
                    <Typography className={styles.catalog_item_name}>
                        {title} {name}
                    </Typography>
                    <Typography className={styles.catalog_item_price}>
                        {price}
                        {t("currency")}
                    </Typography>
                    <Box className={styles.catalog_item_desc}>
                        {order && (
                            <Typography color="#ff0000" sx={{ mb: 1 }}>
                                {t("order")}
                            </Typography>
                        )}
                        <Typography color="text.secondary">
                            {description}
                        </Typography>
                    </Box>
                    {sort && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            {sort.key}{": "}{sort.value}
                        </Typography>
                    )}
                    {weight && (
                        <Typography variant="body2" color="text.secondary">
                            {t("weight")}
                            {weight}
                            {t("unit")}
                        </Typography>
                    )}
                </CardContent>
                <CardActions className={styles.catalog_item_buttons}>
                    <Button
                        className={styles.more_button}
                        onClick={handleDetail}
                    >
                        {t("button_1")}
                    </Button>
                    <Button
                        className={styles.basket_button}
                        onClick={() =>
                            dispatch(
                                basketAddItems({
                                    _id,
                                    title,
                                    name,
                                    price,
                                    weight,
                                    quantity: 1,
                                })
                            )
                        }
                    >
                        {t("button_2")}
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default CatalogCard;
