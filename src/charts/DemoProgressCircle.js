import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress, {
  circularProgressClasses
} from "@mui/material/CircularProgress";
import { COLORS } from "../theme";

export default function CustomizedProgressBars({ percentage }) {
  return (
    <Box sx={{ display: "flex", lexGrow: 1 }}>
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: COLORS.primaryDark
          }}
          size={140 * 0.1 + 140}
          thickness={7}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          disableShrink
          sx={{
            color: COLORS.primary,
            position: "absolute",
            left: (140 * 0.1) / 2,
            top: (140 * 0.1) / 2,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round"
            }
          }}
          size={140}
          thickness={3}
          value={percentage}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              fontFamily: "Gabarito",
              fontWeight: 500,
              color: COLORS.secondary
            }}
            variant="h4"
          >
            {percentage}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Gabarito",
              fontWeight: 500,
              color: COLORS.primary,
              marginLeft: 0.5
            }}
            variant="h6"
          >
            %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
