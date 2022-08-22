import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./error.module.scss";

const Error: React.FC = () => {
    return (
        <Box className={styles.error}>
            <Box className={styles.error_image}>
                <Image
                    src={"/sorry_1.jpg"}
                    alt="error"
                    width={270}
                    height={270}
                />
            </Box>
            <Typography className={styles.error_title}>
                Сторінка не знайдена
            </Typography>
            <Link href="/">
                <Typography className={styles.error_link}>
                    Повернутися на головну
                </Typography>
            </Link>
        </Box>
    );
};

export default Error;
