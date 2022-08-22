import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { motion } from "framer-motion";

import { Typography, Box, Link as MuiLink } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import styles from "./Firstblock.module.scss";

const FirstBlock: React.FC = () => {
    let { t } = useTranslation("firstblock");

    return (
        <Box className={styles.first_block}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Typography className={styles.first_block_title} component="h3">
                    {"CoffeeDoor"}
                </Typography>
                <Typography
                    className={styles.first_block_subtitle}
                    component="h3"
                >
                    {"Brew Bar & Coffeeshop"}
                </Typography>
                <Box className={styles.first_block_links}>
                    <MuiLink href="#coffee_list" className={styles.link_1}>
                        {t("link_1")}
                    </MuiLink>
                    <Link href="/menu">
                        <span className={styles.link_2}>{t("link_2")}</span>
                    </Link>
                </Box>
                <ArrowBackIosIcon className={styles.first_block_icon} />
            </motion.div>
        </Box>
    );
};

export default FirstBlock;
