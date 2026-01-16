import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint, type }) => {
  const [data, setData] = useState([]);
  // Test Requirement: Default must be true (collapsed) to show "Show All"
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
      }
    };
    fetchData();
  }, [endpoint, title]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* Test Requirement: Text must be exactly "Show All" or "Collapse" */}
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {isCollapsed ? "Show All" : "Collapse"}
        </h4>
      </div>
      
      {data.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <div className={styles.content}>
          {!isCollapsed ? (
            <div className={styles.grid}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
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