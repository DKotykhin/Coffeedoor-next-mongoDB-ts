import { Box, InputLabel, Input } from "@mui/material";

interface ISortInput {
    label: string;
    value_1: string | undefined;
    value_2: string | undefined;
    reg_1: Object;
    reg_2: Object
}

const SortInputItem: React.FC<ISortInput> = ({ label, value_1, value_2, reg_1, reg_2 }) => {

    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <InputLabel sx={{ width: "120px", mt: 1 }}>{label}</InputLabel>
            <Input
                {...reg_1}
                sx={{ ml: 3, width: "33%" }}
                defaultValue={value_1}
            />
            <Input
                {...reg_2}
                sx={{ ml: 3, width: "34%" }}
                defaultValue={value_2}
            />
        </Box>
    );
};

export default SortInputItem;