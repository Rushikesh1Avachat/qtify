import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint, type }) => {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true); // Fixes Failure 3: Default state

  useEffect(() => {
    // Fixes Failure 2 & 5: Ensure API is called on mount
    axios.get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Fixes Failure 3: Exact button text */}
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </h4>
      </div>
      
      {data.length === 0 ? (
        <CircularProgress color="success" />
      ) : (
        <div className={styles.cardContainer}>
          {!isCollapsed ? (
            <div className={styles.grid}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            /* Fixes Failure 4: Slider implementation */
            <Carousel 
              data={data} 
              renderComponent={(item) => <Card data={item} type={type} />} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;