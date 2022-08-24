import { Box, InputLabel, TextField } from "@mui/material";

interface IField {
    label: string;
    value: string | undefined;
    reg: Object
}

const TextFieldItem: React.FC<IField> = ({ label, value, reg }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <InputLabel sx={{ width: "120px", mt: 1 }}>{label}</InputLabel>
            <TextField
                {...reg}
                sx={{ ml: 3, width: "70%" }}
                variant="standard"
                multiline
                defaultValue={value}
            />
        </Box>
    );
};

export default TextFieldItem;
