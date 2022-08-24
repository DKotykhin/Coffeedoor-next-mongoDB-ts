interface IFormData {
    [key: string]: string
}
export const CardData = (data: IFormData) => {
    
    const body_ua = {
        title: data.title_ua,
        name: data.name_ua,
        ...(data.description_ua && { description: data.description_ua }),
        ...(data.tm_ua && { tm: data.tm_ua }),
        ...(data.sort_ua_key && { sort: {key: data.sort_ua_key, value: data.sort_ua_value }}),
        ...(data.country_ua && { country: data.country_ua }),
        ...(data.additional_text_1_ua && { additional_text_1: data.additional_text_1_ua.split("\n") }),
        ...(data.additional_list_ua && { additional_list: data.additional_list_ua.split("\n") }),
        ...(data.additional_text_2_ua && { additional_text_2: data.additional_text_2_ua.split("\n") }),
    };
    const body_ru = {
        title: data.title_ru,
        name: data.name_ru,
        ...(data.description_ru && { description: data.description_ru }),
        ...(data.tm_ru && { tm: data.tm_ru }),
        ...(data.sort_ru_key && { sort: {key: data.sort_ru_key, value: data.sort_ru_value} }),
        ...(data.country_ru && { country: data.country_ru }),
        ...(data.additional_text_1_ru && { additional_text_1: data.additional_text_1_ru.split("\n") }),
        ...(data.additional_list_ru && { additional_list: data.additional_list_ru.split("\n") }),
        ...(data.additional_text_2_ru && { additional_text_2: data.additional_text_2_ru.split("\n") }),
    };
    const body_en = {
        title: data.title_en,
        name: data.name_en,
        ...(data.description_en && { description: data.description_en }),
        ...(data.tm_en && { tm: data.tm_en }),
        ...(data.sort_en_key && { sort: {key: data.sort_en_key, value: data.sort_en_value } }),
        ...(data.country_en && { country: data.country_en }),
        ...(data.additional_text_1_en && { additional_text_1: data.additional_text_1_en.split("\n") }),
        ...(data.additional_list_en && { additional_list: data.additional_list_en.split("\n") }),
        ...(data.additional_text_2_en && { additional_text_2: data.additional_text_2_en.split("\n") }),
    };

    const newData = {
        body: [body_ua, body_ru, body_en],
        card_img: data.card_img,        
        list_img: data.list_img.split(",\n"),       
        ...(data.weight && { weight: +data.weight }),
        price: +data.price,
        position: +data.position,
        order: data.order === "true",
        hide: data.hide === "true",
    };    
    return newData;
}