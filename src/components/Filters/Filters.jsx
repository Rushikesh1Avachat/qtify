import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./Filters.module.css";

function Filters({ filters = [], selectedFilterIndex, setSelectedFilterIndex }) {
  // ✅ FIX: correct MUI signature
  const handleChange = (_event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab
            key={ele.key}               // ✅ FIX: stable key
            className={styles.tab}
            label={ele.label}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default Filters;
