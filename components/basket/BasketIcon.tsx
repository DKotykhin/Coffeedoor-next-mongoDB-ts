import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hook";

import { Box, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import { selectBasket } from "../../store/selectors";

import styles from "./Basket.module.scss";

// const StyledBadge = styled(Badge)(() => ({
//     "& .MuiBadge-badge": {
//         color: "#00a1b6",
//         top: 10,
//         border: `2px solid #00a1b6`,
//         padding: "0 3px",
//     },
// }));

const StyledBadge = styled(Badge)`
    & .MuiBadge-badge {
        color: #00a1b6;
        top: 15px;
        border: 2px solid #00a1b6;
        padding: 0 3px;
    }
`;

interface IBasketIcon {
    handleOpen: () => void
}

const BasketIcon: React.FC<IBasketIcon> = ({ handleOpen }) => {
    const { basketdata } = useAppSelector(selectBasket);

    const totalQuantity = basketdata.reduce(
        (sum: number, currentValue: { price: number; quantity: number; }) => sum + currentValue.quantity,
        0
    );

    return (
        <>
            {basketdata.length > 0 && (
                <Box className={styles.basket} onClick={handleOpen}>
                    <StyledBadge badgeContent={totalQuantity}>
                        <ShoppingBasketOutlinedIcon
                            className={styles.basket_icon}
                        />
                    </StyledBadge>
                </Box>
            )}
        </>
    );
};

export default BasketIcon;
