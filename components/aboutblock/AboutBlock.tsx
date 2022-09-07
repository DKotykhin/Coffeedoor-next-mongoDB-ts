import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

import {
    Container,
    Box,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";
import { ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

import { motion } from "framer-motion";
import classNames from "classnames";
import {
    benefitsItem_en,
    benefitsItem_ua,
    benefitsItem_ru,
    itemData,
} from "./AboutBlockConstants";

import styles from "./Aboutblock.module.scss";

const srcset = (image: string, width: number, height: number, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
};

const listVariants = {
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
        },
    }),
    hidden: { opacity: 0 },
};

const theme = createTheme({
    typography: {
        fontSize: 18,
        fontWeightRegular: 300,
    },
});

const AboutBlock: React.FC = () => {
    const router = useRouter();
    let { t } = useTranslation("aboutblock");
    let benefitsItem: string[];
    switch (router.locale) {
        case "ua":
            benefitsItem = benefitsItem_ua;
            break;
        case "en":
            benefitsItem = benefitsItem_en;
            break;
        case "ru":
            benefitsItem = benefitsItem_ru;
            break;
        default:
            benefitsItem = benefitsItem_ua;
    }

    return (
        <Container
            id="about_block"
            maxWidth="lg"
            className={styles.about_block}
        >
            <Typography className={styles.about_title}>{t("title")}</Typography>
            <ImageList
                sx={{
                    height: 800,
                    transform: "translateZ(0)",
                }}
                gap={10}
            >
                {itemData.map((item, i) => {
                    const cols = item.size ? 2 : 1;
                    const rows = item.size ? 2 : 1;
                    const width = item.portrait ? 567 : 850;
                    const height = item.portrait ? 850 : 567;
                    return (
                        <ImageListItem key={i} cols={cols} rows={rows}>
                            <Image
                                {...srcset(item.img, 250, 200, rows, cols)}
                                src={`/aboutimages/${item.img}`}
                                alt={item.title}
                                width={width}
                                height={height}
                                layout='responsive'
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Box maxWidth="md" className={styles.about_box}>
                <Typography className={styles.about_slogan}>
                    {"Our coffee – Everything matters"}
                </Typography>
                <ThemeProvider theme={theme}>
                    <Typography
                        className={classNames(
                            styles.about_descr,
                            styles.about_font
                        )}
                    >
                        {t("paragraph_1")}
                    </Typography>
                    <Typography className={styles.about_font}>
                        {t("subtitle")}
                    </Typography>
                    <List className={styles.list_item}>
                        {benefitsItem.map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={listVariants}
                                custom={i}
                                viewport={{ amount: 0.3, once: true }}
                            >
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <DoneIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>
                    <Typography
                        className={classNames(
                            styles.about_descr,
                            styles.about_font
                        )}
                    >
                        {t("paragraph_2")}
                    </Typography>
                    <br />
                </ThemeProvider>
            </Box>
        </Container>
    );
}

export default AboutBlock;
