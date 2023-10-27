import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";
import { COLORS } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    minWidth: "100%"
  },
  headerContainer: {
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    p: 2
  },
  chartContainer: {
    display: "flex",
    alignContent: "stretch",
    flex: 1
  },
  headerLeftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  headerDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

// Function to generate random data
const generateRandomData = (length) => {
  return Array.from({ length }, () =>
    faker.datatype.number({ min: 0, max: 100 })
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

const BarChart = ({ height }) => {
  const classes = useStyles();
  const labels = getLast7DaysLabels();
  const [selectedDuration, setSelectedDuration] = useState("Last 7 days");

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
    // You can update the chart data based on the selected duration here.
    // For simplicity, we'll keep the same data in this example.
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sales1",
        data: generateRandomData(labels.length),
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        borderWidth: 1,
        barThickness: 8,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        borderRadius: 10
      },
      {
        label: "Sales2",
        data: generateRandomData(labels.length),
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        barThickness: 8,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        borderRadius: 10
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
          color: "transparent",
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
        grid: {
          color: "lightgray",
          borderColor: "transparent"
        },
        border: {
          dash: [4, 4]
        },
        ticks: {
          callback: function (value, index, values) {
            return "" + value; // Add the dollar sign
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

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.headerContainer}>
        <Box className={classes.headerLeftContainer}>
          <Typography
            sx={{ fontFamily: "Gabarito", fontWeight: 800 }}
            variant="h5"
          >
            Total Customer
          </Typography>
          <Box className={classes.headerDetails}>
            <Typography
              sx={{
                fontFamily: "Gabarito",
                fontWeight: 400,
                color: COLORS.textSecnd,
                marginTop: "-5px"
              }}
            >
              <span
                style={{
                  color: COLORS.secondary,
                  marginRight: "5px",
                  fontSize: 22
                }}
              >
                ●
              </span>{" "}
              Online
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gabarito",
                fontWeight: 400,
                color: COLORS.textSecnd,
                marginTop: "-5px"
              }}
            >
              <span
                style={{
                  color: COLORS.primary,
                  marginRight: "5px",
                  fontSize: 22
                }}
              >
                ●
              </span>{" "}
              Offline
            </Typography>
          </Box>
        </Box>

        <Box className={classes.headerRightContainer}>
          <Typography
            sx={{ fontFamily: "Gabarito", fontWeight: 500 }}
            variant="h6"
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
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default BarChart;
