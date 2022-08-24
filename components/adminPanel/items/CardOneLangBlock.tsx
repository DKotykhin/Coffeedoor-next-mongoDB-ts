import { Divider, Typography, Box, Paper } from "@mui/material";
import { IBody } from "../../../types/cardType";

import CardText from "./CardText";

interface IOneLang {
    item: IBody
}

const CardOneLangBlock: React.FC<IOneLang> = ({item}) => {
    return (
        <Box sx={{ my: 1 }}>
            <Paper elevation={4} sx={{ p: 2 }}>
                <CardText label={"Назва групи:"} value={item.title} />
                <CardText label={"Назва товару:"} value={item.name} />
                <CardText label={"Опис:"} value={item.description} />
                {item.sort?.value && <CardText label={"Вид:"} value={[item.sort.key, item.sort.value].join(': ')} />}
                <Divider sx={{ my: 1 }} />
                <CardText label={"Виробник:"} value={item.tm} />
                {item.country && (
                    <CardText label={"Країна:"} value={item.country} />
                )}
                {item.additional_text_1 && (
                    <Box>
                        <Typography component="span" variant="body2">
                            {"Текст 1: "}
                        </Typography>
                        {item.additional_text_1?.map((item: string, i: number) => (
                            <Typography key={i} sx={{ ml: 3 }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                )}
                {item.additional_list && (
                    <Box>
                        <Typography component="span" variant="body2">
                            {"Список: "}
                        </Typography>
                        {item.additional_list?.map((item: string, i: number) => (
                            <Typography key={i} sx={{ ml: 3 }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                )}
                {item.additional_text_2 && (
                    <Box>
                        <Typography component="span" variant="body2">
                            {"Текст 2: "}
                        </Typography>
                        {item.additional_text_2?.map((item: string, i: number) => (
                            <Typography key={i} sx={{ ml: 3 }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default CardOneLangBlock;
