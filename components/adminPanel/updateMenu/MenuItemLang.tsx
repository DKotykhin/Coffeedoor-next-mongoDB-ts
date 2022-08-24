import { Box, Typography } from "@mui/material";
import { IMenu } from "../../../types/menuType";
import MenuItem from "./MenuItem";

interface IMenuItemLang {
    cardData: any, 
    register: any, 
    k: number
}

const MenuItemLang: React.FC<IMenuItemLang> = ({ cardData, register, k }) => {
    return (
        <>
            {cardData?.body[0][k] && (
                <Box
                    sx={{
                        border: "solid 2px #898989",
                        borderRadius: "10px",
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Typography sx={{ textAlign: "center" }}>
                        {"Напій №: "}
                        {k + 1}
                    </Typography>
                    <MenuItem
                        cardData={cardData}
                        register={register}
                        j={0}
                        k={k}
                    />
                    <MenuItem
                        cardData={cardData}
                        register={register}
                        j={1}
                        k={k}
                    />
                    <MenuItem
                        cardData={cardData}
                        register={register}
                        j={2}
                        k={k}
                    />
                </Box>
            )}
        </>
    );
};

export default MenuItemLang;
