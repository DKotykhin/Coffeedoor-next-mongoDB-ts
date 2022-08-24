import { Typography, Box, Paper } from "@mui/material";
import { IMenu } from "../../../types/menuType";

import CardText from "./CardText";

interface IOneLang {
    props: IMenu;
    i: number
}

const MenuOneLangBlock: React.FC<IOneLang> = ({ props, i }) => {
    return (
        <>
            <Typography sx={{ mt: 2, fontWeight: 700 }}>
                <Typography component="span" variant="body2">
                    {"Назва групи: "}
                </Typography>
                {props.title[i].title}
            </Typography>
            {props.body[i]?.map((item, i) => (
                <Box key={i} sx={{ my: 1 }}>
                    <Paper elevation={4} sx={{ p: 2 }}>
                        <CardText label={"Назва:"} value={item.name} />
                        <CardText label={"Опис:"} value={item.description} />
                        <CardText label={"Ціна:"} value={item.price} />
                    </Paper>
                </Box>
            ))}
        </>
    );
};

export default MenuOneLangBlock;
