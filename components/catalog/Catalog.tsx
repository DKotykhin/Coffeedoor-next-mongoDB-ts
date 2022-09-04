import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import ItemList from "./ItemList";
import { teaFilter_ua, teaFilter_ru, teaFilter_en } from "./filterConstants";
import { ICardList, IFilter } from "../../types/cardType";

interface ICatalog {
    cataloglist: ICardList;
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {
    const router = useRouter();
    let { t } = useTranslation("cataloglist");
    let teaFilter: IFilter[], i: number;

    switch (router.locale) {
        case "ua":
            teaFilter = teaFilter_ua;
            i = 0;
            break;
        case "ru":
            teaFilter = teaFilter_ru;
            i = 1;
            break;
        case "en":
            teaFilter = teaFilter_en;
            i = 2;
            break;
        default:
            teaFilter = teaFilter_ua;
            i = 0;
    }

    return (
        <>
            <ItemList
                props={cataloglist.coffeelist}
                showfilter={false}
                i={i}                
                id={"coffee_list"}
                title={t("coffee_title")}
                subtitle={t("coffee_subtitle")}
            />
            <ItemList
                props={cataloglist.tealist}
                showfilter={true}
                i={i}
                filterArray={teaFilter}
                id={"tea_list"}
                title={t("tea_title")}
                subtitle={t("tea_subtitle")}
            />
            <ItemList
                props={cataloglist.jamlist}
                showfilter={false}
                i={i}                
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                props={cataloglist.millslist}
                showfilter={false}
                i={i}                
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            />
        </>
    );
};

export default Catalog;
