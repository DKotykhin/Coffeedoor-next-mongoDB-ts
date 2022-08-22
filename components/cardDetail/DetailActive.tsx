import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/hook";
import useTranslation from "next-translate/useTranslation";

import { Button, Typography } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { basketAddItems } from "../../store/basketSlice";

import styles from "./CardDetail.module.scss";
import { IBody, ICard } from "../../types/cardType";
import { IBasket } from "../../types/basketType";

interface IDetailActive {
    props: ICard;
    body: IBody;
    closeModal: () => void;
}

const DetailActive: React.FC<IDetailActive> = ({ props, body, closeModal }) => {    
    const { _id, price, weight } = props;
    const { title, name } = body;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();
    let { t } = useTranslation("card");

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleBasket = () => {
        closeModal();
        const fullData: IBasket = {
            title,
            name,
            price,
            weight,
            quantity,
            _id
        };
        // console.log(fullData);
        dispatch(basketAddItems(fullData));
    };

    return (
        <Typography className={styles.item_list_quantity}>
            <RemoveCircleOutlineIcon
                className={styles.item_list_remove}
                onClick={handleDecrement}
            />
            {quantity}
            <AddCircleOutlineIcon
                className={styles.item_list_add}
                onClick={handleIncrement}
            />
            <Button className={styles.item_list_button} onClick={handleBasket}>
                {t("button_2")}
            </Button>
        </Typography>
    );
};

export default DetailActive;
