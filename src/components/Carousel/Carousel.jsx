import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material"; // Needed for loading state
import Card from "../Card/Card"; // Component to render individual items
import Carousel from "../Carousel/Carousel";
import styles from "../Section/Section.module.css"; // CSS Module for layout

const Section = ({ title, endpoint, type }) => {
  const [data, setData] = useState([]);
  // Initial state must be true to show "Show All" text by default
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // Fetches data for Top Albums, New Albums, or Songs
    axios.get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Toggle text must be exactly "Show All" or "Collapse" */}
        <h4 className={styles.toggleText} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Show All" : "Collapse"}
        </h4>
      </div>
      
      {data.length === 0 ? (
        <CircularProgress color="success" />
      ) : (
        <div className={styles.content}>
          {!isCollapsed ? (
            /* Grid view: shown when 'Show All' is clicked */
            <div className={styles.grid}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            /* Carousel view: default view */
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