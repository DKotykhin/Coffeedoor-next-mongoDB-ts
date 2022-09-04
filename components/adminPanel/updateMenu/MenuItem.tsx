import { FieldValues, UseFormRegister } from "react-hook-form";

import { Box, Paper } from "@mui/material";
import { IMenu } from "../../../types/menuType";

import InputItem from "../inputs/InputItem";

interface IMenuItem {
    cardData: any,
    register: UseFormRegister<FieldValues>,
    j: number,
    k: number
}

const MenuItem: React.FC<IMenuItem> = ({ cardData, register, j, k }) => {
    return (
        <Box sx={{ my: 1 }}>
            <Paper elevation={4} sx={{ p: 1 }}>
                <InputItem
                    label={"Напій:"}
                    value={cardData?.body[j][k]?.name}
                    reg={register(`name${j}${k}`)}
                />
                <InputItem
                    label={"Опис:"}
                    value={cardData?.body[j][k]?.description}
                    reg={register(`desc${j}${k}`)}
                />
                <InputItem
                    label={"Ціна:"}
                    value={cardData?.body[j][k]?.price}
                    reg={register(`price${j}${k}`)}
                />
            </Paper>
        </Box>
    );
};

export default MenuItem;
