import { Box, Typography, Paper } from "@mui/material";

import InputItem from "../inputs/InputItem";

interface IMenuItemNew {
    register: any,
    k: number
}

const MenuItemNew: React.FC<IMenuItemNew> = ({ register, k }) => {
    return (
        <Box
            sx={{
                border: "solid 2px #898989",
                borderRadius: "10px",
                p: 2,
                mb: 2,
            }}
        >
            <Typography sx={{ textAlign: "center" }}>
                {"Новий напій"}
            </Typography>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <InputItem label={"Напій:"} reg={register(`name0${k}`)} value={undefined} />
                    <InputItem label={"Опис:"} reg={register(`desc0${k}`)} value={undefined} />
                    <InputItem label={"Ціна:"} reg={register(`price0${k}`)} value={undefined} />
                </Paper>
            </Box>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <InputItem label={"Напій:"} reg={register(`name1${k}`)} value={undefined} />
                    <InputItem label={"Опис:"} reg={register(`desc1${k}`)} value={undefined} />
                    <InputItem label={"Ціна:"} reg={register(`price1${k}`)} value={undefined} />
                </Paper>
            </Box>
            <Box sx={{ my: 1 }}>
                <Paper elevation={4} sx={{ p: 1 }}>
                    <InputItem label={"Напій:"} reg={register(`name2${k}`)} value={undefined} />
                    <InputItem label={"Опис:"} reg={register(`desc2${k}`)} value={undefined} />
                    <InputItem label={"Ціна:"} reg={register(`price2${k}`)} value={undefined} />
                </Paper>
            </Box>
        </Box>
    );
};

export default MenuItemNew;
