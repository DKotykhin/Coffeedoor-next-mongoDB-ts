import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { Box, Typography } from "@mui/material";

import styles from "./Returnbutton.module.scss";

const ReturnButton: React.FC = () => {
    let { t } = useTranslation("returnbutton");

    return (
        <Box className={styles.return}>
            <Link href="/">
                <Typography className={styles.return_link}>{t("title")}</Typography>
            </Link>
        </Box>
    );
};

export default ReturnButton;
