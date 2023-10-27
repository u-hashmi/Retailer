import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS, GRADIENT } from "../../theme";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

const WithdrawCard = () => {
  const balance = 3219.37;
  const percentage = -7;
  const balanceString = `$${balance}`;
  const percentageString = `${percentage}% from yesterday`;
  return (
    <Box
      sx={{
        padding: 0,
        flex: 1,
        background: GRADIENT.secondaryGradient,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          margin: "20px 20px"
        }}
      >
        <Typography
          sx={{ fontFamily: "Gabarito", fontWeight: 500, color: COLORS.white }}
          variant="h6"
        >
          Outlet Balance
        </Typography>
        <Typography
          sx={{
            fontFamily: "Gabarito",
            fontWeight: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: COLORS.secondary
          }}
          variant="h3"
        >
          <InsightsRoundedIcon sx={{ fontSize: 60, color: COLORS.white }} />
          {balanceString}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Gabarito",
            fontWeight: 200,
            color: COLORS.white
          }}
        >
          {percentageString}
        </Typography>
      </Box>
      <Box
        sx={{
          background: COLORS.white,
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          sx={{ fontFamily: "Gabarito", fontWeight: 500 }}
          variant="h5"
        >
          Withdraw
        </Typography>
      </Box>
    </Box>
  );
};

export default WithdrawCard;
