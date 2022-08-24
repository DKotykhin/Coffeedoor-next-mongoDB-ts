import { Box, InputLabel, Input } from "@mui/material";

interface IInput {
    label: string;
    value: string | number | undefined;
    reg: Object
}

const InputItem: React.FC<IInput> = ({ label, value, reg }) => {

    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <InputLabel sx={{ width: "120px", mt: 1 }}>{label}</InputLabel>
            <Input
                {...reg}
                sx={{ ml: 3, width: "70%" }}
                defaultValue={value}
            />
        </Box>
    );
};

export default InputItem;
