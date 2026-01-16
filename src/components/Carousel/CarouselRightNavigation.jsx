import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <ArrowForwardIosIcon onClick={() => swiper.slideNext()} />}
        </div>
    );
}