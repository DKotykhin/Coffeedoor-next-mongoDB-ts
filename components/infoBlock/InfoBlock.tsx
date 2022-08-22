import useTranslation from "next-translate/useTranslation";
import {
    Container,
    Typography,
    ListItem,
    ListItemText,
    Link,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import styles from "./Infoblock.module.scss";

const InfoBlock: React.FC = () => {
    let { t } = useTranslation("infoblock");

    return (
        <Container maxWidth="md" className={styles.infoblock}>
            <Typography className={styles.infoblock_title} component="h1">
                {t("title")}
            </Typography>
            <Typography className={styles.infoblock_subtitle} component="h2">
                {t("subtitle")}
            </Typography>
            <ListItem>
                <AccessTimeIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("listtitle_1")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("listsubtitle_1_1")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("listsubtitle_1_2")}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocalShippingOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("listtitle_2")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("listsubtitle_2_1")}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocationOnOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        {t("listtitle_3")}
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        {t("listsubtitle_3_1")}
                    </Typography>
                    <Link
                        className={styles.infoblock_item_3}
                        href="tel:80997609883"
                    >
                        {t("listsubtitle_3_2")}
                    </Link>
                </ListItemText>
            </ListItem>
        </Container>
    );
};

export default InfoBlock;
