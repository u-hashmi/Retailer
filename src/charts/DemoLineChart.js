import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../theme";

// Register required plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const generateRandomData = () => {
  return Array.from({ length: 7 }, () =>
    faker.datatype.number({ min: 0, max: 1000 })
  );
};

const getLast7DaysLabels = () => {
  const labels = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    labels.push(date.getDate());
  }
  return labels;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    minWidth: "100%"
  },
  header: {
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    padding: theme.spacing(2)
  },
  totalCustomer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  customerTitle: {
    fontFamily: "Gabarito",
    fontWeight: 800
  },
  durationSelector: {
    fontFamily: "Gabarito",
    fontWeight: 500
  },
  chartContainer: {
    display: "flex",
    alignContent: "stretch",
    flex: 1
  }
}));

const LineChart = ({ height }) => {
  const [selectedDuration, setSelectedDuration] = useState("Last 7 days");

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  const labels = getLast7DaysLabels();
  const data = {
    labels,
    datasets: [
      {
        label: "Sales$",
        data: generateRandomData(labels.length),
        borderColor: COLORS.primaryDark,
        pointBackgroundColor: COLORS.primary,
        pointBorderColor: COLORS.primary,
        pointHoverBackgroundColor: COLORS.primary,
        pointHoverBorderColor: COLORS.primary,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointHitRadius: 15,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, `${COLORS.primary}66`);
          gradient.addColorStop(0.8, `${COLORS.primary}00`);
          return gradient;
        },
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        left: 20,
        right: 5,
        top: 30,
        bottom: 20
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Date",
          color: "gray"
        },
        grid: {
          color: "lightgray",
          borderColor: "transparent"
        },
        border: {
          dash: [4, 4]
        },
        ticks: {
          callback: function (value, index, values) {
            return value; // x-axis font settings
          },
          font: {
            size: 16, // Adjust the font size
            family: "'Gabarito', sans-serif" // Adjust the font family
          }
        }
      },
      y: {
        title: {
          display: false,
          color: "gray"
        },
        border: {
          dash: false
        },
        grid: {
          color: "transparent",
          borderColor: "transparent"
        },
        ticks: {
          callback: function (value, index, values) {
            return "$" + value; // Add the dollar sign
          },

          maxTicksLimit: 6,
          font: {
            size: 14, // Adjust the font size
            family: "'Gabarito', sans-serif" // Adjust the font family
          }
        }
      }
    }
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.totalCustomer}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gabarito",
              fontWeight: 800
            }}
          >
            Daily Sales
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Typography
              sx={{ fontFamily: "Gabarito", fontWeight: 400, color: "gray" }}
            >
              July 25th - 31st
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Gabarito",
              fontWeight: 500
            }}
          >
            <FormControl>
              <Select
                value={selectedDuration}
                onChange={handleDurationChange}
                variant="standard"
                sx={{
                  fontFamily: "Gabarito",
                  borderBottom: "0px solid red",
                  "&:focus": {
                    backgroundColor: "transparent"
                  },
                  "&:hover": {
                    cursor: "pointer"
                  },
                  "&:hover::before": {
                    borderBottom: `2px solid ${COLORS.secondary}`
                  }
                }}
              >
                <MenuItem value="Last 7 days" sx={{ fontFamily: "Gabarito" }}>
                  Last 7 days
                </MenuItem>
                <MenuItem value="Last 15 days" sx={{ fontFamily: "Gabarito" }}>
                  Last 15 days
                </MenuItem>
                <MenuItem value="Last month" sx={{ fontFamily: "Gabarito" }}>
                  Last month
                </MenuItem>
                <MenuItem value="Last 3 months" sx={{ fontFamily: "Gabarito" }}>
                  Last 3 months
                </MenuItem>
                <MenuItem value="Last 6 months" sx={{ fontFamily: "Gabarito" }}>
                  Last 6 months
                </MenuItem>
                <MenuItem value="Last year" sx={{ fontFamily: "Gabarito" }}>
                  Last year
                </MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.chartContainer}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default LineChart;
