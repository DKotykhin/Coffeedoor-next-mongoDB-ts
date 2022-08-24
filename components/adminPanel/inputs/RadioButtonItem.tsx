import {
    Box,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";

interface IRadio {
    label: string;
    value: boolean;
    reg: Object
}

const RadioButtonItem: React.FC<IRadio> = ({ label, value, reg }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <FormLabel sx={{ width: "150px", mt: 1 }}>{label}</FormLabel>
            <FormControl>
                <RadioGroup defaultValue={value}>
                    <FormControlLabel
                        {...reg}
                        value={false}
                        control={<Radio />}
                        label="Ні"
                    />
                    <FormControlLabel
                        {...reg}
                        value={true}
                        control={<Radio />}
                        label="Так"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default RadioButtonItem;
