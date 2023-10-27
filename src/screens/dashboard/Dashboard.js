import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DemoLineChart from "../../charts/DemoLineChart";
import DemoBarChart from "../../charts/DemoBarChart";

import WithdrawCard from "./WithdrawCard";
import PerformanceCard from "./PerformanceCard";
import { COLORS } from "../../theme";
import OrderList from "./OrderList";
import SaleCampaignsCard from "./SaleCampaignsCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  display: "flex",
  height: 400,
  flex: 1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        p={2}
        justifyContent="space-between"
        alignItems="stretch"
        sx={{ gridTemplateRows: "auto auto 400px auto auto" }}
      >
        <Grid item xs={12} md={2}>
          <Item
            elevation={9}
            sx={{
              padding: 0,
              overflow: "hidden",
              boxShadow: `2px 2px 25px ${COLORS.primary}44`,
              position: "relative",
              zIndex: 100
            }}
          >
            <WithdrawCard />
          </Item>
        </Grid>

        <Grid item xs={12} md={3.5}>
          <Item elevation={9} variant="none">
            <DemoLineChart />
          </Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item elevation={9} variant="outlined">
            <DemoBarChart />
          </Item>
        </Grid>

        <Grid item xs={12} md={2.5}>
          <Item
            variant="outlined"
            sx={{
              padding: 0,
              overflow: "hidden",
              position: "relative",
              zIndex: 100
            }}
          >
            <SaleCampaignsCard />
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item elevation={9} variant="none">
            <OrderList />
          </Item>
        </Grid>

        <Grid item xs={12} md={3}>
          <Item
            variant="outlined"
            sx={{
              padding: 0,
              overflow: "hidden",
              position: "relative",
              zIndex: 100,
              border: "none"
            }}
          >
            <PerformanceCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
