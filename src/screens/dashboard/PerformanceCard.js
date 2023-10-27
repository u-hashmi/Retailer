import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../theme";
import DemoProgressCircle from "../../charts/DemoProgressCircle";
import backgroundImage from "../../assets/shopping_bags.png";

const PerformanceCard = () => {
  const ordersFinished = 64;
  const ordersLeft = 36;
  return (
    <Box
      sx={{
        padding: 2,
        paddingLeft: 3,
        border: "none",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "300px",
        background: "cover",
        backgroundPosition: "bottom right -40px",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.tertiary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}
    >
      <Typography
        sx={{ fontFamily: "Gabarito", fontWeight: 500, color: COLORS.primary }}
        variant="h5"
      >
        Orders Performance
      </Typography>
      <Box>
        <DemoProgressCircle percentage={75} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gabarito",
            fontWeight: 500,
            color: COLORS.secondary
          }}
        >
          {ordersFinished} orders finished
        </Typography>
        <Typography
          sx={{
            fontFamily: "Gabarito",
            fontWeight: 200,
            color: COLORS.secondary
          }}
        >
          {ordersLeft} orders left
        </Typography>
      </Box>
    </Box>
  );
};

export default PerformanceCard;
