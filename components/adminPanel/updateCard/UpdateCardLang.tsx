import { Box, Paper, Typography } from "@mui/material";
import { IBody } from "../../../types/cardType";

import InputItem from "../inputs/InputItem";
import SortInputItem from "../inputs/SortInputItem";
import TextFieldItem from "../inputs/TextFieldItem";

interface ICardLang {
    item: IBody;
    lang: string;
    register: any
}

const UpdateCardLang: React.FC<ICardLang> = ({ item, lang, register }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Paper elevation={12} sx={{ p: 3 }}>
                <Typography sx={{ textAlign: "center" }}>
                    {"Мова: "}
                    {lang}
                </Typography>
                <InputItem
                    label={"Назва групи:"}
                    value={item?.title}
                    reg={register(`title_${lang}`)}
                />
                <InputItem
                    label={"Назва товару:"}
                    value={item?.name}
                    reg={register(`name_${lang}`)}
                />
                <TextFieldItem
                    label={"Опис:"}
                    value={item?.description}
                    reg={register(`description_${lang}`)}
                />               
                <SortInputItem
                    label={"Вид:"}
                    value_1={item?.sort?.key}
                    value_2={item?.sort?.value}
                    reg_1={register(`sort_${lang}_key`)}
                    reg_2={register(`sort_${lang}_value`)}
                />
                <InputItem
                    label={"Виробник:"}
                    value={item?.tm}
                    reg={register(`tm_${lang}`)}
                />
                <InputItem
                    label={"Країна:"}
                    value={item?.country}
                    reg={register(`country_${lang}`)}
                />
                <TextFieldItem
                    label={"Текст 1:"}
                    value={item?.additional_text_1?.join("\n")}
                    reg={register(`additional_text_1_${lang}`)}
                />
                <TextFieldItem
                    label={"Список:"}
                    value={item?.additional_list?.join("\n")}
                    reg={register(`additional_list_${lang}`)}
                />
                <TextFieldItem
                    label={"Текст 2:"}
                    value={item?.additional_text_2?.join("\n")}
                    reg={register(`additional_text_2_${lang}`)}
                />
            </Paper>
        </Box>
    );
};

export default UpdateCardLang;
