import { Box, Typography } from "@mui/material";

interface IText {
    label: string;
    value: string | number | undefined
}

const CardText: React.FC<IText> = ({ label, value }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Typography sx={{ minWidth: "120px", mt: "2px" }} variant="body2">
                {label}
            </Typography>
            <Typography>{value}</Typography>
        </Box>
    );
};

export default CardText;
