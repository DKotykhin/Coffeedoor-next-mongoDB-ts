import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Container, Typography } from "@mui/material";
import classNames from "classnames";

import styles from "./Menutitle.module.scss";

const MenuTitle: React.FC = () => {
    const router = useRouter();
    let { t } = useTranslation("menutitle");

    return (
        <Container maxWidth="md" className={styles.title_block}>
            <Link href="/">
                <div className={styles.img}>
                    <Image
                        src={"/logo_700x191.jpg"}
                        alt="logo"
                        width={700}
                        height={191}
                    />
                </div>
            </Link>
            {router.locales?.map((locale) => (
                <span
                    key={locale}
                    className={classNames(
                        styles.lang_button,
                        router.locale === locale ? styles.lang_active : null
                    )}
                >
                    <Link href={router.asPath} locale={locale}>
                        {locale}
                    </Link>
                </span>
            ))}
            <Typography className={styles.title} component="h2">
                {t("title")}
            </Typography>
            <Typography className={styles.subtitle} component="h3">
                {t("subtitle")}
            </Typography>
        </Container>
    );
};

export default MenuTitle;
