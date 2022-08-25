import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IBasket } from "../../types/basketType";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const TOKEN = process.env.TELEGRAM_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        if (!TOKEN) {
            throw new Error("Define TOKEN environmental variable");
        }
        if (!CHAT_ID) {
            throw new Error("Define CHAT_ID environmental variable");
        }
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        let message = `<b>Заявка з сайту</b>\n`;
        let itemSum = 0;

        const formData = req.body.formdata;
        message += `<b>Відправник: </b>${formData.name}\n`;
        message += `<b>Телефон: </b>${formData.phone}\n`;
        message += `<b>Спосіб доставки: </b>${formData.delivery}\n`;
        message += `<b>Коментар: </b>${formData.text ? formData.text : ""}\n`;
        message += `<b>Замовлення: </b>\n`;

        req.body.basketdata.forEach((item: IBasket) => {
            message += `${item.title} ${item.name}, ${
                item.weight ? `${item.weight}г,` : ""
            } ${item.quantity} x ${item.price} грн\n`;
            itemSum += +item.price * item.quantity;
        });
        message += `<b>Всього на сумму: </b>${itemSum} грн`;

        const resp = await axios.post(URL, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        });

        return res.status(200).json({ data: req.body, response: resp.data.ok });
    } catch (error: any) {
        console.log("error: ", error.message);
        return res.status(500).json({ error: error.message });
    }
}
