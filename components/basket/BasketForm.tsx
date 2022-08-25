import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import { Box, Button, TextField } from "@mui/material";
import { Typography, Input, InputLabel } from "@mui/material";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import classNames from "classnames";

import { FormValidation } from "./BasketFormValidation";

import styles from "./Basketform.module.scss";
import { IFormData } from "../../types/basketType";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

interface IBasketForm {
    onSubmit: any
}

const BasketForm: React.FC<IBasketForm> = ({ onSubmit }) => {
    let { t } = useTranslation("basket");
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IFormData>(FormValidation);

    return (
        <>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
            >
                <ThemeProvider theme={theme}>
                    <InputLabel
                        htmlFor="name"
                        className={classNames(styles.title, styles.mb)}
                    >
                        {t("name")}
                    </InputLabel>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} sx={{ width: "100%" }} />
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.name?.message}
                    </Typography>
                    <InputLabel
                        htmlFor="phone"
                        className={classNames(
                            styles.title,
                            styles.mb,
                            styles.mt
                        )}
                    >
                        {t("phone")}
                    </InputLabel>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} sx={{ width: "100%" }} />
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.phone?.message}
                    </Typography>
                    <Controller
                        name="delivery"
                        control={control}
                        render={({ field }) => (
                            <FormControl {...field}>
                                <FormLabel
                                    className={classNames(
                                        styles.title,
                                        styles.mb,
                                        styles.mt
                                    )}
                                >
                                    {t("delivery")}
                                </FormLabel>
                                <RadioGroup
                                // defaultValue="забрати в кавярні"
                                >
                                    <FormControlLabel
                                        value="забрати в кав'ярні"
                                        control={<Radio />}
                                        label={t("var_1")}
                                    />
                                    <FormControlLabel
                                        value="доставка перевізником"
                                        control={<Radio />}
                                        label={t("var_2")}
                                    />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.delivery?.message}
                    </Typography>
                    <InputLabel
                        htmlFor="text"
                        className={classNames(
                            styles.title,
                            styles.mb,
                            styles.mt
                        )}
                    >
                        {t("comment")}
                    </InputLabel>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                maxRows={4}
                                sx={{ width: "100%" }}
                            />
                        )}
                    />
                    <Button
                        // disabled={!isValid}
                        className={styles.submitbutton}
                        type="submit"
                    >
                        {t("submit")}
                    </Button>
                </ThemeProvider>
            </Box>
        </>
    );
};

export default BasketForm;
