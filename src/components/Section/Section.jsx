import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";

export default function Section({ title, data = [], filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  // ✅ FIXED: run once when filterSource changes
  useEffect(() => {
    if (!filterSource) return;

    filterSource().then((response) => {
      const { data } = response;
      setFilters([{ key: "all", label: "All" }, ...data]);
    });
  }, [filterSource]);

  const showFilters = filters.length > 1;

  // ✅ FIXED: fully safe filtering
  const cardsToRender = Array.isArray(data)
    ? data.filter((card) => {
        if (!card) return false;

        if (showFilters && selectedFilterIndex !== 0) {
          return (
            card?.genre?.key === filters[selectedFilterIndex]?.key
          );
        }
        return true;
      })
    : [];

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card key={ele?.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(item) => (
                <Card key={item?.id} data={item} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}
