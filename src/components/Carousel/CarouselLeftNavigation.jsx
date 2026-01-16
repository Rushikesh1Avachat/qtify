import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <ArrowBackIosNewIcon onClick={() => swiper.slidePrev()} />}
        </div>
    );
}