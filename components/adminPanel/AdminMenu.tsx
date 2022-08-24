import { useRouter } from "next/router";
import { useAppDispatch } from "../../store/hook";

import { Container, Button } from "@mui/material";

import CardText from "./items/CardText";
import MenuOneLangBlock from "./items/MenuOneLangBlock";

import { cloneId } from "../../store/adminSlice";
import { IMenu } from "../../types/menuType";

interface IMenuCard {
    props: IMenu
}

const AdminMenu: React.FC<IMenuCard> = ({ props }) => {
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
            <MenuOneLangBlock props={props} i={0} />
            <MenuOneLangBlock props={props} i={1} />
            <MenuOneLangBlock props={props} i={2} />

            <CardText
                label={"Приховати картку:"}
                value={props.hide ? "Так" : "Ні"}
            />
            {props.position && (
                <CardText label={"Позиція:"} value={props.position} />
            )}
            <Button sx={{ m: 2 }} onClick={editorClick}>
                Редагувати
            </Button>
            <Button sx={{ m: 2 }} onClick={cloneClick} color="secondary">
                Клонувати
            </Button>
        </Container>
    );
};

export default AdminMenu;
