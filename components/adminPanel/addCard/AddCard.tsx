import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/hook";
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import InputItem from "../inputs/InputItem";
import TextFieldItem from "../inputs/TextFieldItem";
import RadioButtonItem from "../inputs/RadioButtonItem";
import UpdateCardLang from "../updateCard/UpdateCardLang";
import { CardData } from "../formData/CardData";
import { addData } from "../AdminApi";
import { addCardItem } from "../../../store/adminSlice";
import { ICard, INewCardData } from "../../../types/cardType";

interface IFormData {
    [key: string]: string
}

interface IAddCard {
    cardData: ICard;
    collection: string
}

const AddCard: React.FC<IAddCard> = ({ cardData, collection }) => {
    const { handleSubmit, register } = useForm();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const item_ua = cardData?.body[0];
    const item_ru = cardData?.body[1];
    const item_en = cardData?.body[2];

    const onSubmit = (data: IFormData) => {
        const newData: INewCardData = CardData(data);
        addData(newData, collection)
            .then((data) => {
                if (data.insertedId) {
                    router.push("/adminpanel");
                    const newItem = { _id: data.insertedId, ...newData };
                    dispatch(addCardItem(newItem));
                    toast.success("Successfully add data to database");
                } else toast.error("Can't get new id from database");
            })
            .catch(function (error) {
                console.warn(error.message);
                toast.error("Can't add new position to database");
            });
    };

    return (
        <Container sx={{ my: 2 }}>
            <Box onSubmit={handleSubmit(onSubmit)} component="form">
                <UpdateCardLang
                    item={item_ua}
                    lang={"ua"}
                    register={register}
                />
                <UpdateCardLang
                    item={item_ru}
                    lang={"ru"}
                    register={register}
                />
                <UpdateCardLang
                    item={item_en}
                    lang={"en"}
                    register={register}
                />

                <InputItem
                    label={"Основне фото:"}
                    value={cardData?.card_img}
                    reg={register("card_img")}
                />
                <TextFieldItem
                    label={"Детальні фото:"}
                    value={cardData?.list_img.join(",\n")}
                    reg={register("list_img")}
                />
                <InputItem
                    label={"Вага:"}
                    value={cardData?.weight}
                    reg={register("weight")}
                />
                <InputItem
                    label={"Ціна:"}
                    value={cardData?.price}
                    reg={register("price")}
                />
                <InputItem
                    label={"Позиція:"}
                    value={cardData?.position}
                    reg={register("position")}
                />
                <RadioButtonItem
                    label={"Під замовлення:"}
                    value={cardData?.order}
                    reg={register("order")}
                />
                <RadioButtonItem
                    label={"Приховати картку:"}
                    value={cardData?.hide}
                    reg={register("hide")}
                />

                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Link href="/adminpanel">
                        <Button sx={{ mx: 2, color: "#898989" }}>
                            Відмінити
                        </Button>
                    </Link>
                    <Button type="submit" sx={{ mx: 2 }}>
                        Додати нову картку
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default AddCard;
