export interface ICard {
    _id: string;    
    body: IBody[];
    card_img: string;
    list_img: string[];
    weight: number;
    price: number;
    order: boolean;
    hide: boolean;
    position: number;
}

export interface IBody {
    title: string;
    name: string;
    description?: string;
    tm?: string;
    sort?: IFilter;
    country?: string;
    additional_text_1?: string[];
    additional_list?: string[];
    additional_text_2?: string[];
}

export interface IFilter {
    key: string;
    value: string;
}