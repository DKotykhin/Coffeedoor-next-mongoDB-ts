import useTranslation from "next-translate/useTranslation";

import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import { ListItem, List, ListItemIcon } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import DetailSwipeImage from "./DetailSwipeImage";
import DetailActive from "./DetailActive";
import { IBody, ICard } from "../../types/cardType";

import styles from "./CardDetail.module.scss";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    height: 600,
    overflowY: "scroll",
    maxWidth: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
};

interface ICardDetail {
    props: ICard;
    body: IBody;
    openModal: boolean;
    closeModal: () => void;
}

const CardDetail: React.FC<ICardDetail> = ({
    props,
    body,
    openModal,
    closeModal,
}) => {
    const { price, weight, list_img } = props;
    const {
        name,
        title,
        sort,
        tm,
        description,
        country,
        additional_text_1,
        additional_text_2,
        additional_list,
    } = body;

    let { t } = useTranslation("card");

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style} className={styles.item_list}>
                    <CloseIcon
                        className={styles.item_list_close}
                        onClick={handleClose}
                    />
                    <DetailSwipeImage img={list_img} alt={name} />
                    <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                        {title} {name}
                    </Typography>
                    <Typography className={styles.item_list_price}>
                        {price}
                        {t("currency")}
                    </Typography>
                    <DetailActive props={props} body={body} closeModal={handleClose} />
                    {weight && (
                        <Typography variant="body2">
                            {t("weight")}
                            {weight}{t("unit")}
                        </Typography>
                    )}
                    {sort && <Typography variant="body2">{sort.key}{": "}{sort.value}</Typography>}
                    {tm && (
                        <Typography variant="body2">
                            {t("made")}
                            {tm}
                        </Typography>
                    )}
                    {country && (
                        <Typography variant="body2">
                            {t("country")}
                            {country}
                        </Typography>
                    )}
                    <Typography sx={{ mt: 2, mb: 2 }} variant="body2">
                        {description}
                    </Typography>
                    {additional_text_1?.map((item, i) => (
                        <Typography key={i} variant="body2">
                            {item}
                        </Typography>
                    ))}
                    <List className="list">
                        {additional_list?.map((item, i) => (
                            <ListItem disablePadding key={i}>
                                <ListItemIcon>
                                    <DoneIcon />
                                </ListItemIcon>
                                <Typography variant="body2" sx={{ m: 1 }}>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    {additional_text_2?.map((item, i) => (
                        <Typography key={i} variant="body2" sx={{ mt: 1 }}>
                            {item}
                        </Typography>
                    ))}
                </Box>
            </Fade>
        </Modal>
    );
}

export default CardDetail;
