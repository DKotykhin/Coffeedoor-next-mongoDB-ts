import React from "react";
import useTranslation from "next-translate/useTranslation";

import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

import styles from "./Footer.module.scss";

enum SocialMedia {
    FACEBOOK = "https://www.facebook.com/Coffeedoor.Kharkov",
    INSTAGRAM = "https://www.instagram.com/coffeedoor.kh/",
    TELEGRAM = "https://t.me/Dmytro_Kotykhin"
}

const Footer: React.FC = () => {
    let { t } = useTranslation("common");

    return (
        <div id="footer_block" className={styles.footer_block}>
            <Box>
                <Link href={SocialMedia.FACEBOOK}>
                    <FacebookIcon className={styles.footer_icon} />
                </Link>
                <Link href={SocialMedia.INSTAGRAM}>
                    <InstagramIcon className={styles.footer_icon} />
                </Link>
                <Link href={SocialMedia.TELEGRAM}>
                    <TelegramIcon className={styles.footer_icon} />
                </Link>
            </Box>
            <Typography className={styles.footer_item}>
                {t("address")}
            </Typography>
            <Box className={styles.footer_item}>
                <Link sx={{ color: "#fff" }} href="tel:80997609883">
                    {t("phone")}
                    {": +38 099 760 98 83"}
                </Link>
            </Box>
            <Box className={styles.footer_item}>
                <Link
                    sx={{ color: "#fff" }}
                    href="mailto:coffeedoor.kh@gmail.com"
                >
                    {"e-mail: coffeedoor.kh@gmail.com"}
                </Link>
            </Box>
        </div>
    );
};

export default Footer;
