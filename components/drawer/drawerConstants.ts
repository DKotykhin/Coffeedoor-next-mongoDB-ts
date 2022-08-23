export const groupOfTitle_1_ua: IDrawerTitle[] = [
    { title: "Кава в зернах", id: "#coffee_list" },
    { title: "Листовий чай", id: "#tea_list" },
    { title: "Кавомолки", id: "#mills_list" },
    { title: "Аксессуари", id: "#acc_list" },
    { title: "Варення", id: "#jam_list" },
];

export const groupOfTitle_1_ru: IDrawerTitle[] = [
    { title: "Кофе в зёрнах", id: "#coffee_list" },
    { title: "Листовой чай", id: "#tea_list" },
    { title: "Кофемолки", id: "#mills_list" },
    { title: "Аксессуары", id: "#acc_list" },
    { title: "Варенье", id: "#jam_list" },
];

export const groupOfTitle_1_en: IDrawerTitle[] = [
    { title: "Coffee beans", id: "#coffee_list" },
    { title: "Leaf tea", id: "#tea_list" },
    { title: "Сoffee grinders", id: "#mills_list" },
    { title: "Accessories", id: "#acc_list" },
    { title: "Jam", id: "#jam_list" },
];

export const groupOfTitle_2_ua: IDrawerTitle[] = [
    { title: "Про нас", id: "#about_block" },
    { title: "Контакти", id: "#footer_block" },
];

export const groupOfTitle_2_ru: IDrawerTitle[] = [
    { title: "О нас", id: "#about_block" },
    { title: "Контакты", id: "#footer_block" },
];

export const groupOfTitle_2_en: IDrawerTitle[] = [
    { title: "About", id: "#about_block" },
    { title: "Contacts", id: "#footer_block" },
];

interface IDrawerTitle {
    readonly title: string;
    readonly id: string;
}
