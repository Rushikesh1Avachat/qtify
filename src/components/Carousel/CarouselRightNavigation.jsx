import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Carousel.module.css';

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && (
                <ArrowForwardIosIcon onClick={() => swiper.slideNext()} />
            )}
        </div>
    );
}