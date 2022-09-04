import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Typography } from "@mui/material";

import Card from "../card/Card";
import FilterItems from "../filters/FilterItems";
import { ICard, IFilter } from "../../types/cardType";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ItemList.module.scss";

interface IItemList {
    props: ICard[];
    id: string;
    title: string;
    subtitle: string;
    showfilter: boolean;
    filterArray?: IFilter[];
    i: number
}

const ItemList: React.FC<IItemList> = ({
    props,
    id,
    title,
    subtitle,
    showfilter,
    filterArray,
    i,
}) => {
    const [list, setList] = useState(props);

    const onSelectSort = (sort: string) => {
        let data = props;
        if (sort) {
            data = props.filter(item => item.body[i].sort?.value === sort);
        }
        setList(data);
    };

    return (
        <Container id={id} maxWidth="xl" className={styles.item_list}>
            <Typography className={styles.item_list_title}>{title}</Typography>
            <Typography className={styles.item_list_subtitle}>
                {subtitle}
            </Typography>
            {showfilter && (
                <FilterItems
                    onSelect={onSelectSort}
                    quantity={list ? list.length : null}
                    filterArray={filterArray}
                />
            )}
            <Swiper
                slidesPerView={1.3}
                spaceBetween={10}                
                breakpoints={{
                    850: {
                        slidesPerView: 2,
                        threshold: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        threshold: 20
                    },
                }}                
                navigation={true}
                modules={[Navigation]}
            >
                <AnimatePresence initial={false}>
                    {list?.map((item) => (
                        <SwiperSlide key={item._id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                // transition={{duration: 0.5}}
                            >
                                <Card props={item} i={i} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </AnimatePresence>
            </Swiper>
        </Container>
    );
};

export default ItemList;
