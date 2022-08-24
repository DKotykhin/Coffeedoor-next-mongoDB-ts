import { useState } from "react";
import { useAppDispatch } from "../../../store/hook";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import InputItem from "../inputs/InputItem";
import RadioButtonItem from "../inputs/RadioButtonItem";
import MenuItemLang from "./MenuItemLang";
import MenuItemNew from "./MenuItemNew";
import { MenuData } from "../formData/MenuData";
import { updateData, deleteData } from "../AdminApi";
import {
    updateMenuItem,
    deleteMenuItem,
} from "../../../store/adminSlice";
import { IMenu } from "../../../types/menuType";

interface IFormData {
    [key: string]: string
}

interface IUpdateMenu {
    cardData: IMenu, 
    id: any, 
    collection: string 
}

const UpdateMenu: React.FC<IUpdateMenu> = ({ cardData, id, collection }) => {
    const [add, setAdd] = useState(false);
    const { handleSubmit, register } = useForm();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const onSubmit = (data: IFormData) => {
        const newData = MenuData(data);
        // console.log(newData);
        updateData(newData, id, collection)
            .then((data) => {
                if (data.matchedCount) {
                    dispatch(updateMenuItem({ data: newData, id }));
                    router.push("/admin");
                    toast.success("Successfully update data in database");
                } else toast.error("Can't update position in database");
            })
            .catch(function (error) {
                console.warn(error.message);
                toast.error("Can't update position in database");
            });
    };

    const onDelete = () => {
        // console.log("Видалити: ", id, collection);
        deleteData(id, collection)
            .then((data) => {
                if (data.deletedCount) {
                    dispatch(deleteMenuItem(id));
                    router.push("/admin");
                    toast.success("Successfully deleted data from database");
                } else toast.error("Can't deleted data from database");
            })
            .catch(function (error) {
                console.warn(error.message);
                toast.error("Can't deleted data from database");
            });
    };

    return (
        <Container sx={{ my: 2 }}>
            <Box onSubmit={handleSubmit(onSubmit)} component="form">
                <InputItem
                    label={"Назва ua:"}
                    value={cardData?.title[0].title}
                    reg={register("title_ua")}
                />
                <InputItem
                    label={"Назва ru:"}
                    value={cardData?.title[1].title}
                    reg={register("title_ru")}
                />
                <InputItem
                    label={"Назва en:"}
                    value={cardData?.title[2].title}
                    reg={register("title_en")}
                />

                <MenuItemLang cardData={cardData} register={register} k={0} />
                <MenuItemLang cardData={cardData} register={register} k={1} />
                <MenuItemLang cardData={cardData} register={register} k={2} />
                <MenuItemLang cardData={cardData} register={register} k={3} />
                <MenuItemLang cardData={cardData} register={register} k={4} />
                <MenuItemLang cardData={cardData} register={register} k={5} />
                <MenuItemLang cardData={cardData} register={register} k={6} />
                <MenuItemLang cardData={cardData} register={register} k={7} />
                <MenuItemLang cardData={cardData} register={register} k={8} />
                <MenuItemLang cardData={cardData} register={register} k={9} />

                {add && <MenuItemNew register={register} k={99} />}
                <Button
                    onClick={() => setAdd(!add)}
                    sx={{ display: "block", margin: "20px auto" }}
                >
                    {add ? "Приховати нову позицію" : "Додати нову позицію"}
                </Button>

                <InputItem
                    label={"Позиція:"}
                    value={cardData?.position}
                    reg={register("position")}
                />
                <RadioButtonItem
                    label={"Приховати картку:"}
                    value={cardData?.hide}
                    reg={register("hide")}
                />

                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Button color="error" sx={{ mx: 2 }} onClick={onDelete}>
                        Видалити
                    </Button>
                    <Link href="/admin">
                        <Button sx={{ mx: 2, color: "#898989" }}>
                            Відмінити
                        </Button>
                    </Link>
                    <Button type="submit" sx={{ mx: 2 }}>
                        Підтвердити
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default UpdateMenu;
