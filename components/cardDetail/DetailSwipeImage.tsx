import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface IDetailSwipeImage {
    img: string[];
    alt: string
}

const DetailSwipeImage: React.FC<IDetailSwipeImage> = ({ img, alt }) => {
    return (
        <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 10,
                shadowScale: 0.8,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
        >
            {img?.map((item, i) => (
                <SwiperSlide key={i}>
                    <Image
                        src={
                            item
                                ? `/goodsimages/${item}`
                                : `/goodsimages/wait_1.webp`
                        }
                        alt={alt}
                        width={350}
                        height={350}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DetailSwipeImage;
