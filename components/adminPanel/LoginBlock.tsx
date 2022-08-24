import { useForm } from "react-hook-form";

import {
    Box,
    InputLabel,
    Input,
    Container,
    Button,
    Typography,
} from "@mui/material";

interface ILoginData {
    login: string
}

interface ILoginBlock {
    LoginSubmit: (arg0: ILoginData) => void
}

const LoginBlock: React.FC<ILoginBlock> = ({ LoginSubmit }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {        
        LoginSubmit(data);
    };

    return (
        <Container maxWidth="sm">
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{ textAlign: "center" }}
            >
                <InputLabel sx={{ marginTop: "100px", marginBottom: "20px" }}>
                    Для входу на сторінку введіть пароль
                </InputLabel>
                <Input
                    {...register("login", { required: true, minLength: 6 })}
                    sx={{ ml: 3, width: "70%" }}
                    placeholder="Введіть пароль..."
                    error={!!errors.login}
                />
                {errors.login && (
                    <Typography sx={{ color: "#ff0000", mt: 1 }}>
                        {"Обов'язкове поле! Мінімум 6 символів"}
                    </Typography>
                )}
                <Button
                    type="submit"
                    sx={{ display: "block", margin: "50px auto" }}
                >
                    Підтвердити
                </Button>
            </Box>
        </Container>
    );
};

export default LoginBlock;
