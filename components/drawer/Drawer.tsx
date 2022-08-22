import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import classNames from "classnames";

import {
    groupOfTitle_1_ua,
    groupOfTitle_1_ru,
    groupOfTitle_1_en,
    groupOfTitle_2_ua,
    groupOfTitle_2_ru,
    groupOfTitle_2_en,
} from "./drawerConstants";

import styles from "./Drawer.module.scss";

interface IDrawerTitle {
    title: string;
    id: string
}

export default function NavDrawer() {
    const router = useRouter();
    const [state, setState] = useState(false);
    let { t } = useTranslation("firstblock");

    let groupOfTitle_1: IDrawerTitle[], groupOfTitle_2: IDrawerTitle[];
    switch (router.locale) {
        case "ua":
            groupOfTitle_1 = groupOfTitle_1_ua;
            groupOfTitle_2 = groupOfTitle_2_ua;
            break;
        case "en":
            groupOfTitle_1 = groupOfTitle_1_en;
            groupOfTitle_2 = groupOfTitle_2_en;
            break;
        case "ru":
            groupOfTitle_1 = groupOfTitle_1_ru;
            groupOfTitle_2 = groupOfTitle_2_ru;
            break;
        default:
            groupOfTitle_1 = groupOfTitle_1_ua;
            groupOfTitle_2 = groupOfTitle_2_ua;
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    return (
        <div className={styles.drawer}>
            <MenuIcon
                className={styles.drawer_icon}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                <Box
                    className={styles.list_box}
                    sx={{ width: 250 }}
                    //role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List className={styles.list_items}>
                        <Image
                            src={"/logo_256x256.ico"}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        {groupOfTitle_1.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.list_items}>
                        {groupOfTitle_2.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Box className={styles.link_item}>
                        <Link href="/menu">
                            <span className={styles.link_button}>
                                {t("link_2")}
                            </span>
                        </Link>
                    </Box>
                    {router.locales?.map((locale) => (
                        <span
                            key={locale}
                            className={classNames(
                                styles.lang_button,
                                router.locale === locale
                                    ? styles.lang_active
                                    : null
                            )}
                        >
                            <Link href={router.asPath} locale={locale}>
                                {locale}
                            </Link>
                        </span>
                    ))}
                </Box>
            </Drawer>
        </div>
    );
}
