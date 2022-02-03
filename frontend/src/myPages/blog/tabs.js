import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsSimple() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Grid container item justifyContent="center" xs={12} lg={4} mx="auto" p={5}>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleTabType}>
          <Tab label="My Profile" />
          <Tab label="Dashboard" />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

export default TabsSimple;
