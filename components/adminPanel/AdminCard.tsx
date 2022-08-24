import { useRouter } from "next/router";
import { useAppDispatch } from "../../store/hook";

import { Container, Typography, Box, Button } from "@mui/material";

import CardText from "./items/CardText";
import CardOneLangBlock from "./items/CardOneLangBlock";
import { cloneId } from "../../store/adminSlice";
import { ICard } from "../../types/cardType";

interface IAdminCard {
    props: ICard
}

const AdminCard: React.FC<IAdminCard> = ({ props }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const editorClick = () => {
        router.push(`/admin/${props._id}`);
    };

    const cloneClick = () => {
        // console.log("clone: ", props._id);
        dispatch(cloneId(props._id));
        router.push("/admin/add");
    };

    return (
        <Container sx={{ my: 2, border: "solid 2px #898989", borderRadius: 5 }}>
            {props.body.map((item, i) => (
                <CardOneLangBlock key={i} item={item} />
            ))}
            <Box>
                <Typography component="span" variant="body2">
                    {"Основне фото: "}
                </Typography>
                <Typography sx={{ ml: 3 }}>{props.card_img}</Typography>
            </Box>
            <Box>
                <Typography component="span" variant="body2">
                    {"Детальні фото: "}
                </Typography>
                {props.list_img?.map((item, i) => (
                    <Typography key={i} sx={{ ml: 3 }}>
                        {item}
                    </Typography>
                ))}
            </Box>
            {props.weight && <CardText label={"Вага:"} value={props.weight} />}
            <CardText label={"Ціна:"} value={props.price} />
            {!!props.position && (
                <CardText label={"Позиція:"} value={props.position} />
            )}
            <CardText
                label={"Під замовлення:"}
                value={props.order ? "Так" : "Ні"}
            />
            <CardText
                label={"Приховати картку:"}
                value={props.hide ? "Так" : "Ні"}
            />
            <Button sx={{ m: 2 }} onClick={editorClick}>
                Редагувати
            </Button>
            <Button sx={{ m: 2 }} onClick={cloneClick} color="secondary">
                Клонувати
            </Button>
        </Container>
    );
};

export default AdminCard;
